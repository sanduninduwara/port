import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FaNode, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaDocker, FaAws, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiFirebase, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiGithub, SiDocker } from 'react-icons/si';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Technologies</h2>
              <p>These technologies are the most used technologies for my projects, works, and competitions.<br></br>Always trying to learn and apply cutting-edge and best-suitable technologies based on the project. </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              
                <div className="item  mx-4">
                  <h4 className="mb-4">Languages</h4>

                  <FaJava size={40} className="m-2" />
                  <FaPython size={50} className="m-2" />
                  <SiJavascript size={40} className="m-2" />
                  <FaPhp size={40} className="m-2" />
                </div>
                <div className="item  mx-4">
                  {/* <img src={meter2} alt="Image" /> */}

                  <h4 className="mb-4">Web Development</h4>
                  <FaNode size={50} className="m-2" />
                  <FaReact size={50} className="m-2" />
                  <SiFirebase size={40} className="m-2" />
                  <FaHtml5 size={50} className="m-2" />
                  <FaCss3Alt size={50} className="m-2" />
                  <SiJavascript size={40} className="m-2" />
                </div>


                <div className="item   mx-4">
                  <h4 className="mb-4">Databases</h4>

                  <SiMysql size={55} className="m-2" />
                  <SiMongodb size={40} className="m-2" />
                  <SiPostgresql size={50} className="m-2" />
                  {/* <FaCss3Alt size={50} className="m-2"/>
                                <SiJavascript size={40} className="m-2"/> */}

                </div>
                <div className="item   mx-4">
                  <h4 className="mb-4">Web Designing</h4>
                  <FaBootstrap size={50} className="m-2" />
                  <FaFigma size={45} className="m-2" />
                  <SiTailwindcss size={40} className="m-2" />
                  <FaHtml5 size={50} className="m-2" />
                  <FaCss3Alt size={50} className="m-2" />
                  <SiJavascript size={40} className="m-2" />
                </div>
                <div className="item mx-4">
                  <h4 className="mb-4">Other</h4>

                  <SiGithub size={40} className="m-2" />
                  <SiDocker size={50} className="m-2" />
                  <FaAws size={50} className="m-2" />
                  {/* <SiJavascript size={40} className="m-2"/> */}
                </div>

                {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
