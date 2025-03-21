import React from "react";
import { mathematicians } from "../images/images";

import { Helmet } from "react-helmet";

const Mathematicians = () => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | Mathematicians</title>
      </Helmet>

      <h1 className="title-of-mathematicians">
        Greatest Mathematicians in the history of Mathematics
      </h1>

      <div className="all-mathematicians-information">
        {mathematicians.map((mathematician) => (
          <div className="mathematician" key={mathematician.image}>
            <h1>{mathematician.name}</h1>
            <img src={mathematician.image} alt="" />
            <p className="moreInfo">
              <span>
                <strong> Birth Year :</strong> {mathematician.birthYear}
              </span>
              <br />
              <span>
                <strong>Death Year :</strong> {mathematician.deathYear}
              </span>
              <br />
              <span>
                <strong>Birth Place :</strong> {mathematician.birthplace}
              </span>
            </p>
            <p className="achievement">
              <strong>Achievements : </strong> <br />
              {mathematician.achievements}
            </p>
            <ul className="nobelWorks">
              <strong>Nobel Works : </strong>
              {mathematician.notableWorks.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
            {mathematician.awards && mathematician.awards.length > 0 && (
              <p className="awards">
                <strong>Awards: </strong>
                <br />
                {mathematician.awards.join(", ")}
              </p>
            )}

            <p className="legacy">
              <strong>Legacy : </strong>
              <br />
              {mathematician.legacy}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mathematicians;
