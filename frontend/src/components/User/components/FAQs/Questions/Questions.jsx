import React, { useState, useCallback, useMemo, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { QuestionsBdMO, QuestionsIMO, QuestionsAPMO } from "./../FAQs";

const Questions = () => {
  const [loadingFile, setLoadingFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleDownload = useCallback(async (url, name) => {
    try {
      setLoadingFile(name);
      if (name.toLowerCase().endsWith(".pdf")) {
        window.open(url, "_blank");
      } else {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error downloading or opening file:", error);
    } finally {
      setLoadingFile(null);
    }
  }, []);

  const handleDownloadAllAsZip = useCallback(async (files, zipName) => {
    try {
      setLoadingFile(`ZIP_${zipName}`);
      const zip = new JSZip();
      const fetchPromises = files.map(async (file) => {
        const response = await fetch(file.url);
        const blob = await response.blob();
        zip.file(file.name, blob);
      });

      await Promise.all(fetchPromises);
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, `${zipName}.zip`);
    } catch (error) {
      console.error("Error creating ZIP file:", error);
    } finally {
      setLoadingFile(null);
    }
  }, []);

  const handleDownloadSelected = useCallback(async () => {
    try {
      setLoadingFile("ZIP_Selected");
      const zip = new JSZip();
      const selected = Object.keys(selectedFiles).filter(
        (fileName) => selectedFiles[fileName]
      );
      const filesToDownload = selected
        .map((fileName) => {
          return (
            QuestionsBdMO.find((f) => f.name === fileName) ||
            QuestionsIMO.find((f) => f.name === fileName) ||
            QuestionsAPMO.find((f) => f.name === fileName)
          );
        })
        .filter(Boolean);

      const fetchPromises = filesToDownload.map(async (file) => {
        const response = await fetch(file.url);
        const blob = await response.blob();
        zip.file(file.name, blob);
      });

      await Promise.all(fetchPromises);
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "Selected_Files.zip");
    } catch (error) {
      console.error("Error creating ZIP for selected files:", error);
    } finally {
      setLoadingFile(null);
    }
  }, [selectedFiles]);

  const handleFileSelection = useCallback((fileName) => {
    setSelectedFiles((prevState) => ({
      ...prevState,
      [fileName]: !prevState[fileName],
    }));
  }, []);

  const isAnyFileSelected = useMemo(
    () => Object.values(selectedFiles).includes(true),
    [selectedFiles]
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderDownloadButtons = (topicName, files, zipName) => (
    <div className={`faqs `}>
      <div className="row">
        <h2 className="topic-name">{topicName}</h2>
        <div className="zip-button">
          <button
            className={`${loadingFile === `ZIP_${zipName}` ? "loading" : ""}`}
            onClick={() => handleDownloadAllAsZip(files, zipName)}
            disabled={loadingFile === `ZIP_${zipName}`}
          >
            {loadingFile === `ZIP_${zipName}`
              ? "Creating ZIP..."
              : `Download All ${zipName}`}
          </button>
        </div>
      </div>
      <div className="download-button-list">
        {files.map((file, index) => (
          <div key={index} className="file-option">
            <input
              type="checkbox"
              id={`select_${file.name}`}
              checked={selectedFiles[file.name] || false}
              onChange={() => handleFileSelection(file.name)}
            />
            <label htmlFor={`select_${file.name}`}>
              <button
                onClick={() => handleDownload(file.url, file.name)}
                disabled={loadingFile === file.name}
              >
                {loadingFile === file.name ? "Downloading..." : file.name}
              </button>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <h1 className="faqsHeading">All Previous Questions of Olympiads</h1>

      <div className="download-selected">
        <button
          onClick={handleDownloadSelected}
          disabled={loadingFile === "ZIP_Selected" || !isAnyFileSelected}
        >
          {loadingFile === "ZIP_Selected"
            ? "Creating ZIP..."
            : "Download Selected PDFs"}
        </button>
      </div>

      <div className="faqs">
        <div className="row" style={{ marginBottom: 0 }}>
          <h2 className="topic-name">
            BdMO {isMobile && <br />} (Bangladesh Math Olympiad)
          </h2>
          <div className="zip-button">
            <button
              className={`${loadingFile === "ZIP_BdMO_2024" ? "loading" : ""}`}
              onClick={() => handleDownloadAllAsZip(QuestionsBdMO, "BdMO_2024")}
              disabled={loadingFile === "ZIP_BdMO_All"}
            >
              {loadingFile === "ZIP_BdMO_All"
                ? "Creating ZIP..."
                : "Download All BdMO_Questions"}
            </button>
          </div>
        </div>

        <div className="download-button-list BdMO">
          {Object.entries(
            QuestionsBdMO.sort((a, b) => {
              // Sort by level first (based on a predefined level order)
              const levelOrder = [
                "Higher Secondary",
                "Junior",
                "Primary",
                "Secondary",
                "All",
              ];
              const levelA = levelOrder.indexOf(a.level);
              const levelB = levelOrder.indexOf(b.level);

              if (levelA !== levelB) {
                return levelA - levelB; // Sort by level
              }

              // If levels are the same, sort by year
              const yearA = parseInt(a.name.match(/\d{4}/)?.[0] || 0, 10);
              const yearB = parseInt(b.name.match(/\d{4}/)?.[0] || 0, 10);

              return yearA - yearB;
            }).reduce((acc, question) => {
              // Group by year and level
              const yearMatch = question.name.match(/\d{4}/);
              const year = yearMatch ? yearMatch[0] : "Unknown Year";

              if (!acc[year]) acc[year] = {};
              if (!acc[year][question.level]) acc[year][question.level] = [];
              acc[year][question.level].push(question);

              return acc;
            }, {})
          ).map(([year, levels]) => (
            <div key={year}>
              <h3 className="year-name">{year}</h3>
              {["Higher Secondary", "Junior", "Primary", "Secondary", "All"]
                .filter((level) => (levels[level] || []).length > 0) // Only include levels with files
                .map((level) => (
                  <div key={level} className="level-section">
                    <h4 className="level-title">{level}</h4>
                    <div className="boxes">
                      {(levels[level] || []).map((question, index) => (
                        <div key={index} className="file-option">
                          <input
                            type="checkbox"
                            id={`select_${question.name}`}
                            checked={selectedFiles[question.name] || false}
                            onChange={() => handleFileSelection(question.name)}
                          />
                          <label htmlFor={`select_${question.name}`}>
                            <button
                              onClick={() =>
                                window.open(question.url, "_blank")
                              }
                              disabled={loadingFile === question.name}
                            >
                              {loadingFile === question.name
                                ? "Downloading..."
                                : question.name}
                            </button>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {renderDownloadButtons(
        <>
          APMO {isMobile && <br />}{" "}
          <span className={isMobile && `small-fz`}>
            (Asian Pacific Mathematics Olympiad)
          </span>
        </>,
        QuestionsAPMO,
        "APMO_Questions"
      )}

      {renderDownloadButtons(
        <>IMO {isMobile && <br />} (International Math Olympiad)</>,
        QuestionsIMO,
        "IMO_Questions"
      )}
    </>
  );
};

export default Questions;
