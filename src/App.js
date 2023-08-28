import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
// import Clients from "./components/Clients/Clients";
// import Schools from "./components/Schools/Schools"
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Schools from "./Schools/Schools";
import Services from "./components/Service/Services";
import { Helmet } from 'react-helmet';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import faveiconx from "./images/app.ico";

function App() {
  const setFavicon = (newFavicon) => {
    const favicon = document.querySelector("link[rel*='icon']");
    if (favicon) {
      favicon.href = newFavicon;
    }
  };

  setFavicon(faveiconx);
  return (
    <>
      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
            <Banner>
              <Header />
              <ProfComponent />
            </Banner>
          </Col>
        </Row>
      </Container>

      <Services />

      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
            <LightColor>
              <Projects />
            </LightColor>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
            <LightColor>
              <Schools />
            </LightColor>
          </Col>
        </Row>
      </Container>



      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
            <LightColor>
              <Footer />
            </LightColor>
          </Col>
        </Row>
      </Container>

      <Helmet>
        <title>Portofolio</title>
        <meta name="description" content="I am a software engineer with expertise in cross-platform application development." />
        <meta name="keywords" content="software engineer, fullstack, Nodejs, Reactjs, Nextjs, Frontend, Backend, cross-platform, QT, QML" />
        {/* Add more meta tags as needed */}
      </Helmet>
    </>
  );
}

// export default App;


export default App;

// const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
