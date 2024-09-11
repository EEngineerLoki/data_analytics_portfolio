import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import credit from "../../Assets/Projects/credit_card.png";
import fuel from "../../Assets/Projects/fuel_emmission.png";
import sales from "../../Assets/Projects/sql_sales.png";
import plague from "../../Assets/Projects/plague.png";
import student from "../../Assets/Projects/student_checker.png";
import lahar from "../../Assets/Projects/lahar_detection.png";

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
              imgPath={credit}
              isBlog={false}
              title="EDA Credit Card Users Market Tendency"
              ghLink="https://github.com/EEngineerLoki/credit_card_analysis"
              demoLink="https://drive.google.com/file/d/1-TE18v4cHck8nWRvYznhZlCcTHD0t23N/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuel}
              isBlog={false}
              title="EDA General Fuel Types Distribution on Fuel Emission (CH4 & N2O) 10 Years Analysis"
              ghLink="https://github.com/EEngineerLoki/fuel_emission"
              demoLink="https://drive.google.com/file/d/1g7_s_d6xqcvh_B6C1ps72xoNBFyUjp0h/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="SQL Methodologies Using MS SSMS"
              ghLink="https://github.com/EEngineerLoki/sql_sales_analysis_cte_and_aggs/blob/main/Sales_Analysis.sql"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plague}
              isBlog={false}
              title="Web Scraping Project: Return Table of Values for User Input Back Ended by Wikipedia"
              ghLink="https://github.com/EEngineerLoki/Simple_Web_Scraper"
              demoLink="https://drive.google.com/file/d/1er3joxDvaAtRjxZG3XmQDL1-RAD9gvnG/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Pandas DF and Tkinter GUI Checker if Student Exist in Subject Class"
              ghLink="https://github.com/EEngineerLoki/Simple_Web_Scraper"
              demoLink='https://drive.google.com/file/d/18xFGvSGOg9vNBFoY224nUovTtmyZgbWq/view?usp=sharing'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lahar}
              isBlog={false}
              title="Enhanced Methodologies for Lahar Detection Using PyCV Computer Vision"
              ghLink="https://github.com/EEngineerLoki/lahar_detection"
              demoLink='https://drive.google.com/file/d/1ZffMJphwK635WqKu61mALKmn7D-1IWnR/view?usp=sharing'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
