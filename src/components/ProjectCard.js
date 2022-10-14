import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{margin:'auto',marginBottom:'20px'}}>
        <img src={imgUrl} alt="lala"  style={{objectFit: 'cover', maxHeight:'210px'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a rel="noopener noreferrer" href={siteUrl} target="_blank">DEMO</a>
        </div>
      </div>
    </Col>
  )
}
