import React from "react";
import { MdEngineering } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite, CgDatabase } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdEngineering}
            title={"Software Engineer"}
            disc={`Craft Lightweight, Efficient, and Code-Optimized Cross-Platform Applications with QT/QML (C++/QML), Featuring Clean Code for Enhanced Speed, Robustness, and Code Efficiency.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgDatabase}
            title={"BackEnd"}
            disc={`As a backend developer skilled in working with a range of databases including MongoDB, SQL, MySQL, and others, I specialize in building solutions that seamlessly cater to diverse needs across micro and macro settings.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"FrontEnd"}
            disc={`As a frontend developer equipped with a robust skillset encompassing CSS, HTML, JavaScript, and TypeScript, I specialize in crafting intuitive and user-friendly graphical user interfaces. My proficiency extends to frameworks like ReactJS, Next.js, and React Native, enabling me to deliver visually appealing and responsive solutions that prioritize speed without compromising on user experience`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
