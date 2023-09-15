import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="cyan">Atul Dwivedi </span>
            from <span className="cyan"> Delhi, India.</span>
            <br /> I am an engineering passout from Bharati Vidyapeeth's College of Engineering, New Delhi.
            <br />
            Additionally, I am currently looking for a full time job :)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p className="blockquote-quote" style={{ color: "#91c2e1" }}>
          "There is always one more bug to fix."{" "}
          </p>
          <footer className="blockquote-footer">Ellen Ullman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
