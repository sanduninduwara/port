import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,siteUrl,codeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{margin:'auto',marginBottom:'20px'}}>
        <img src={imgUrl} alt="lala"  style={{objectFit: 'cover', maxHeight:'220px', height:'220px'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          {codeUrl && <a rel="noopener noreferrer" href={codeUrl} target="_blank">CODE</a>}
          <br></br>
          {siteUrl && <a rel="noopener noreferrer" href={siteUrl} target="_blank">PREVIEW</a>}
          
        </div>
      </div>
    </Col>
  )
}
