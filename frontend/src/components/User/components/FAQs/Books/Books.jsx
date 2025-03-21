import React, { useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Books } from "./../FAQs";
import { PdfIcon } from "./../../../images/images";

const AllBooks = () => {
  const [loadingBooks, setLoadingBooks] = useState(false);

  const handleDownloadAllBooks = useCallback(() => {
    setLoadingBooks(true);
    const zip = new JSZip();
    const fetchPromises = Books.map((book) =>
      fetch(book.url)
        .then((response) => response.blob())
        .then((blob) => zip.file(`${book.bookName}.pdf`, blob))
    );

    Promise.all(fetchPromises)
      .then(() => {
        zip.generateAsync({ type: "blob" }).then((content) => {
          saveAs(content, "Olympiad Books.zip");
          setLoadingBooks(false);
        });
      })
      .catch((error) => {
        console.error("Error downloading books:", error);
        setLoadingBooks(false);
      });
  }, []);

  const categoryOrder = [
    "Algebra",
    "Geometry",
    "Number Theory",
    "Combinatorics",
    "Problem Solving",
  ];
  const groupedBooks = categoryOrder.map((category) => ({
    category,
    books: Books.filter((book) => book.category === category),
  }));

  return (
    <div className="olympiadBooks">
      <h1 className="faqsHeading books-heading">
        All recommended book's PDF for Math Olympiad
      </h1>
      <div className="booksDownload">
        <button
          onClick={handleDownloadAllBooks}
          className={`booksDownload ${loadingBooks && "loading"}`}
        >
          {loadingBooks
            ? "Downloading ..."
            : `Download ${Books.length} Books as ZIP`}
        </button>
      </div>
      <div className="books">
        {groupedBooks.map((group) => (
          <div key={group.category} className="categorySection">
            <h2>{group.category}</h2>
            <div className="categorySection-books">
              {group.books.map((book) => (
                <div className="book" key={book.url}>
                  <img
                    src={PdfIcon}
                    alt=""
                    onClick={() => window.open(book.url, "_blank")}
                  />
                  <div className="booksDetails">
                    <h3
                      className="bookName"
                      onClick={() => window.open(book.url, "_blank")}
                    >
                      {book.bookName}
                    </h3>
                    <p className="bookWriter">- {book.bookWriter}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
