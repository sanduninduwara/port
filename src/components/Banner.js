import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "programmer", "freelancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
    }
  }

  return (
    <section className="banner" id="home">
      <Container className="my-4">
        <Row className="aligh-items-center ">
          <Col xs={12} md={6} xl={7} className="mt-4">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated  animate__fadeInLeft" : "d-none"}>
                  {/* {/* <span className="tagline rounded">Welcome to my Portfolio</span> */}
                  {/* <div className={"animate__animated  animate__fadeInLeft"}> */}
                  <h1>{`Hi! I'm Sandun:`}<br></br> <span className="txt-rotate" data-rotate='[ "Web Developer", "programmer","freelancer"]'><span className="wrap">{text}</span></span></h1>
                  <p className="me-5">A smart working personality with an undeviating vision and passion towards continuously updating the computer science field</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  {/* </div> */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>

            {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
            {/* <img src={headerImg} alt="Header Img"/> */}
            <div className="box">
              <div className="content">
                <h2>HIRE ME!</h2>
                <a href="https://www.fiverr.com/nishshanka_san?public_mode=true">Fiverr</a>
              </div>
              <img src={headerImg} alt="Flowers in Chania" />
              <span></span>
            </div>

            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
