import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
// import { GiEarthAmerica, GiSagittarius } from "react-icons/gi";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
// import myImage from '/images/profile.jpg';
import myImage from '../../images/profile.jpg';
import myresume from "../../resume/Resume_Aji_Priatmoko_Software_Engineer_12_Years.pdf"

const ProfComponent = () => {
  const handleDownloadResume = () => {
    // const resumeUrl = '../../resume/Resume_Aji_Priatmoko_Software_engineer_12_Years.pdf';
    const resumeUrl = myresume;
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = 'Resume_Aji_Priatmoko_Software_engineer_12_Years.pdf';
    link.click();
  };
  const handleLetsTalk = () => {
    window.location.href = 'mailto:aji@ittelko-pwt.ac.id';
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I am</span>
          </h4>
          <h1 className="green">Aji Priatmoko</h1>
          <h3>Software Engineer</h3>
          <p>
            I am a software engineer with expertise in cross-platform application development.
            Additionally, I possess a skill set in cross-platform with QT/QML, frontend development including ReactJS and
            NextJS, React native along with exposure to backend development with Nodejs. My approach involves designing
            and developing applications using the latest technologies to ensure the delivery
            of high-quality code.

          </p>
          <button onClick={handleLetsTalk}>Let's talk</button>
          
          <button onClick={handleDownloadResume}>Download Resume</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/" target="_blank" rel="noreferrer">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/hanif85" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/aji-priatmoko-a70a7118/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>


          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={myImage}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    text-align: justify;
  
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    margin-right: 10px; 
    cursor: pointer;
    background-color: #01be96;
    border: none;
    border-radius: 11px;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
