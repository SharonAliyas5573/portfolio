import React from "react";
import Card from "react-bootstrap/Card";
import { ImHeadphones ,ImFilm,ImBook } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sharon Aliyas Johnson </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> I am pursuing B-Tech 
            in <span className="purple">Computer Science (Cyber Security)</span>
            <br />
            <br/>
            I'm passionate about the art of programming and have been on an exciting journey of learning and discovery. With a mix of dedication and curiosity, I've ventured into the world of coding and picked up a few tricks along the way. 🚀
            <br />
            <br/>
            Feel free to reach out for collaboration, projects, or simply to geek out over all things tech!
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImHeadphones />  Listening Music
            </li>
            <li className="about-activity">
              <ImFilm />  Watching Movies 
            </li>
            <li className="about-activity">
              <ImBook />  Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I actually think that I'm a rather optimistic and happy person; it's just that I'm not a very positive person, if you see the difference.!"{" "}
          </p>
          <footer className="blockquote-footer">linus torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
