import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://repository-images.githubusercontent.com/739020736/8c580659-0cfd-4761-9629-863dc80c4617"
              isBlog={false}
              title="OpenSource Kerala Developers Gig/Job Platform - Backend"
              description={
                <div>
                  <ul>
                    <li>Promoting and encouraging open-source contributions as a core community value.</li>
                    <li>Dedicated platform catalyzing growth within the Kerala Python community.</li>
                    <li>Connecting freelancers and job seekers with opportunities tailored to Python enthusiasts.</li>
                    <li>Fostering collaboration and networking among Python developers in Kerala.</li>
                  </ul>
                </div>
              }
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://kerala-devs-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-time chat app"
              description={
                <div>
                  <ul>
                    <li>Integrated Django for a robust backend and React for a dynamic and interactive frontend</li>
                    <li>Supported group conversations and stored chat history for a comprehensive user experience</li>
                    <li>Implemented WebSocket technology for instantaneous and seamless real-time chatting</li>
                    <li>Ensured security through robust user authentication and authorization, coupled with a responsive design for accessibility across devices.</li>
                  </ul>
                </div>
              }
              ghLink="https://github.com/SharonAliyas5573/chat_app"
             
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
