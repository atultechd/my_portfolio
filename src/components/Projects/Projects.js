import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pentartstudio from "../../Assets/Projects/pentartstudio.png";
import connect from "../../Assets/Projects/connect.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import blog from "../../Assets/Projects/blog.png";
import movies from "../../Assets/Projects/movies.png";
import major from "../../Assets/Projects/major.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Listing"
              description="A movie listing web page for displaying movies and their description using HTML, CSS and JS with APIs."
              ghLink="https://github.com/atultechd/Movie-app"
              demoLink="https://atultechd.github.io/Movie-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BlogSite"
              description="Personal blog writing website for learning purpose using Ruby on rails and PostgreSQL."
              ghLink="https://github.com/atultechd/learning-path-blog"
              demoLink="https://learning-path-blog-w5gl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentartstudio}
              isBlog={false}
              title="Pentartstudio"
              description="This website is just made for learning purpose and one of my initial days project, made by using HTML and CSS."
              ghLink="https://github.com/atultechd/pentartstudio"
              demoLink="https://atultechd.github.io/pentartstudio/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect}
              isBlog={false}
              title="Connect With Me"
              description="This web page is the clone of link tree (connect with me page),that i made using HTML and CSS."
              ghLink="https://github.com/atultechd/connect_with_me"
              demoLink="https://atultechd.github.io/connect_with_me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A web page based on tic tac toe game, for learning and fun purpose, made with HTML,CSS and JS."
              ghLink="https://github.com/atultechd/tictactoe-naive"
              demoLink="https://atultechd.github.io/tictactoe-naive/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={major}
              isBlog={false}
              title="Arrhythmia detection"
              description="This is my college major project on M.L about detection of Arrhythmia using ECG image of a person."
              ghLink="https://github.com/atultechd/Arrhythmia_detection_using_ecg_image_data"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
