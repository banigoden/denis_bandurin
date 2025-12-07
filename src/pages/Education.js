import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <VerticalTimeline lineColor="#aaa">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2015"
        iconStyle={{ background: "#deeb6b", color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Integrated Master: Security information of automated systems</h3>
        <h4 className="vertical-timeline-element-subtitle">Volgograd University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        iconStyle={{ background: '#deeb6b', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Online training course (2 parts) on Java programming basics</h3>
        <h4 className="vertical-timeline-element-subtitle">Helsinki University</h4>
     </VerticalTimelineElement>
     <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java programming training course</h3>
          <h4 className="vertical-timeline-element-subtitle">JavaRush</h4>
          <p>Java programming training course</p>
          <img src={ require('../images/certificate2.jpg')} alt="Certificate from JavaRush" width="400" height="300" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Java programming (practical course)</h3>
          <h4 className="vertical-timeline-element-subtitle">JavaRush</h4>
          <p>Java programming (practical course)</p>
          <img src={ require('../images/java-sertificate.png')} alt="Certificate from JavaRush" width="400" height="300"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile software development</h3>
          <p>Agile software development</p>
          <img src={ require('../images/certificate3.jpg')} alt="Certificate from Agile software development" width="400" height="300"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Docker</h3>
          <p>Docker</p>
          <img src={ require('../images/docker-certificate.png')}  alt="Certificate Docker" width="400" height="300"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">AWS Certified Developer Associate</h3>
          <p>AWS Certified Developer Associate</p>
          <img src={ require('../images/awsi.jpeg')} alt="Certificate AWS Developer Associate" width="400" height="300"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Linux Challenges</h3>
          <p>Linux Challenges</p>
          <img src={ require('../images/certificate4.jpg')} alt="Linux Challenges" width="400" height="300"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: '#deeb6b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kubernetes Challenges</h3>
          <p>Kubernetes Challenges</p>
          <img src={ require('../images/certificate5.jpg')} alt="Kubernetes Challenges" width="400" height="300"/>
        </VerticalTimelineElement>
      </VerticalTimeline>
  );
}

export default Education;