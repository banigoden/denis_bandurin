import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1 className="education-title">Education & Certifications</h1>
    <VerticalTimeline lineColor="#aaa">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">[Course/Certification Name]</h3>
          <h4 className="vertical-timeline-element-subtitle">[Institution/Platform]</h4>
          <p>[Description and details will be added here]</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2015"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Integrated Master: Security information of automated systems</h3>
        <h4 className="vertical-timeline-element-subtitle">Volgograd University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        iconStyle={{ background: '#deeb6b', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Online training course (2 parts) on Java programming basics</h3>
        <h4 className="vertical-timeline-element-subtitle">Helsinki University</h4>
     </VerticalTimelineElement>
     <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java programming training course</h3>
          <h4 className="vertical-timeline-element-subtitle">JavaRush</h4>
          <p>Java programming training course</p>
          <img src={ require('../images/certificate2.jpg')} alt="Certificate from JavaRush" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java programming (practical course)</h3>
          <h4 className="vertical-timeline-element-subtitle">JavaRush</h4>
          <p>Java programming (practical course)</p>
          <img src={ require('../images/java-sertificate.png')} alt="Certificate from JavaRush" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile software development</h3>
          <p>Agile software development</p>
          <img src={ require('../images/certificate3.jpg')} alt="Certificate from Agile software development" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Docker</h3>
          <p>Docker</p>
          <img src={ require('../images/docker-certificate.png')} alt="Certificate Docker" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">AWS Certified Developer Associate</h3>
          <p>AWS Certified Developer Associate</p>
          <img src={ require('../images/awsi.jpeg')} alt="Certificate AWS Developer Associate" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Linux Challenges</h3>
          <p>Linux Challenges</p>
          <img src={ require('../images/certificate4.jpg')} alt="Linux Challenges" className="certificate-image" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: '#deeb6b', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kubernetes Challenges</h3>
          <p>Kubernetes Challenges</p>
          <img src={ require('../images/certificate5.jpg')} alt="Kubernetes Challenges" className="certificate-image" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;