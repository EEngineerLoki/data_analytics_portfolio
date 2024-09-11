import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matthew David Loquinerio </span>
            from <span className="purple"> Albay Philippines.</span>
            <br />
            I am a Registered Electrical Engineer by passing the May REELE Boards.
            <br />
            I have completed Bachelors in Electrical Engineering at Bicol University College of
            Engineering.
            <br />
            <br />
            Aside from my engineering background, I also strive to be a good programmer with a keen
            sight for quality analysis on worldly data.
            <br />
            <br />
            Other than engineering and programming, some other activities that I love 
            to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Pursue mastery in a world of lesser commitments"{" "}
          </p>
          <footer className="blockquote-footer">Matthew David</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
