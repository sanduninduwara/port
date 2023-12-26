import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/globex2.jpg";
import projImg2 from "../assets/img/bairways.jpg";
import projImg3 from "../assets/img/pixelmap.jpg";
import projImg4 from "../assets/img/chatmanager.jpg";
import projImg5 from "../assets/img/supportdesk.jpg";
import projImg6 from "../assets/img/admin page.jpg";
import cf from "../assets/img/cf.png";
import cyberspace from "../assets/img/cyberspace.png";
import warranty_wallet from "../assets/img/warranty_wallet.png";
import elearn from "../assets/img/elearn.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects1 = [
    {
      title: "Career Fair WebSite",
      description: "The official student qualification showcase website for Career Day 2024 at the University of Moratuwa. ",
      imgUrl: cf,
      siteUrl: "",
      codeUrl: ""
    },
    {
      title: "Warranty Wallet",
      description: "A web application for manage of warranty life cycles for consumers, retailers, and manufacturers.",
      imgUrl: warranty_wallet,
      siteUrl: "",
      codeUrl: "https://github.com/fiverrcolabs/Warranty_Wallet"
    },
    {
      title: "Cyber Space",
      description: "Frontend implementation for an online computer product-selling website.",
      imgUrl: cyberspace,
      siteUrl: "",
      codeUrl: ""
    },
    {
      title: "E-Learning Platform",
      description: "Backend development and real-time chat implementation for an online class conducting platform.",
      imgUrl: elearn,
      codeUrl: ""
    },
    {
      title: "GLOBEX",
      description: "Crypto/Share market chart analize web-app",
      imgUrl: projImg1,
      siteUrl: "",
      codeUrl: "https://github.com/Globex-Trading"
    },
    {
      title: "BAIRWAYS",
      description: "Air ticket booking website",
      imgUrl: projImg2,
      siteUrl: "",
      codeUrl: ""
    },

  ];

  const projects = [

    {
      title: "PIXELMAP",
      description: "This is a real-time 100x100 pixel map that users can change based on their daily credits.",
      imgUrl: projImg3,
      siteUrl: "",
      codeUrl: "https://github.com/fiverrcolabs/pixelmap"
    },
    {
      title: "CHAT MANAGER",
      description: "chat plugin service for websites",
      imgUrl: projImg4,
      codeUrl: "https://github.com/section117/crms-server-se-uom-sem-4"
    },
    {
      title: "Support Desk",
      description: "custom support ticket app",
      imgUrl: projImg5,
      codeUrl: "https://github.com/sanduninduwara/Support-desk"
    },
    {
      title: "Custom product buying site",
      description: "product buying web site",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} className="mt-3">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center " style={{cursor: "pointer"}} id="pills-tab">
                      <Nav.Item >
                        <Nav.Link eventKey="first" >Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated " : ""}>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>                    </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="lala"></img>
    </section>
  )
}
