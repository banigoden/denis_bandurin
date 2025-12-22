import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Work Experience</h1>
      <VerticalTimeline lineColor="#aaa">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - Present"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            [Company Name], [Position]
          </h3>
          <h4 className="vertical-timeline-element-subtitle">[Location]</h4>
          <p>[Job description and responsibilities will be added here]</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2022"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Self-employed, Freelance DevOps
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Configured AWS infrastructure using Terraform, creating
            infrastructure-as-code (IaC) templates to provision and manage
            resources such as EC2 instances, S3 buckets, VPCs, and security
            groups.
          </p>
          <p>
            Implemented and automated the Continuous Integration/Continuous
            Deployment (CI/CD) process using Jenkins to streamline software
            development, testing, and deployment workflows.
          </p>
          <p>Working with Docker and Kubernetes, Helm</p>
          <p>
            Backend and frontend development using AWS, including deployment of
            EC2 instances and Route 53 configuration, RDS, and IAM roles,
            Terraform
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2022"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Oracle, QA Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saint Petersburg, Russia
          </h4>
          <p>
            Developed and improved tests on Python and Bash scripts to validate
            Cloud services, Oracle Linux distributions, and Kernel features
          </p>
          <p>Collaborated with Developers to debug discovered issues in Jira</p>
          <p>
            Troubleshooting and fixing bugs encountered during testing or test
            development of network and hard disk driving
          </p>
          <p>
            {" "}
            Contributed to QA test framework and workflow improvement for CI
            type of testing using Jenkins
          </p>
          <p> Worked in Agile team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2021"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kelly Services, System administrator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saint Petersburg, Russia
          </h4>
          <p>Provided 1st and 2nd line support</p>
          <p>
            Installed, managed, and configured Windows operating systems,
            applications, as well as network components
          </p>
          <p>
            Assistance in developing user documentation/ installation procedure
          </p>
          <p>Technical support for corporate client/server systems of Linux</p>
          <p>Worked with My SQL</p>
          <p>System and computer analysis</p>
          <p>Supported remote desktop services</p>
          <p>Provided conference support for online & offline meetings</p>
          <p>
            <strong>Achievement:</strong>
          </p>
          <p>
            Developed Java app for AD. I used LDAP to connect to AD and took the
            data of the user for filling an Excel file.{" "}
          </p>
          <p>
            That increased the speed of creating account lists with specific
            data.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016 - 2017"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            List, System administrator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saint Petersburg, Russia
          </h4>
          <p> Technical support for corporate client/server systems of Linux</p>
          <p>
            {" "}
            Preventative maintenance on laptops, printers, and any other
            equipment
          </p>
          <p> Security monitoring</p>
          <p> Worked with My SQL</p>
          <p> Installation and administration of IP cameras, telephony</p>
          <p> Worked with network</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2015 - 2016"
          contentStyle={{
            background: "#869cd5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
          iconStyle={{ background: "#869cd5", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Masterskaya Zdoroviya, System administrator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saint Petersburg, Russia
          </h4>
          <p>Hardware and software systems support</p>
          <p>Administration of Windows Server 2008 (AD)</p>
          <p>Administration of all local and remote servers, backup</p>
          <p>Creating and configuring accounts and access rights in Linux</p>
          <p>Configuration of Cisco and D-Link routers</p>
          <p>Email account administration</p>
          <p>Hyper-V</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
