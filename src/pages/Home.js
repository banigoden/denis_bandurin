import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";
import photo from '../assets/myphoto.png';

function Home() {
   return (
    <div className="home">
      <div className="about">   
      <div className="myimage">
       <img src={photo} alt="Denis Bandurin" />
      </div>
        <h1> Hi, My Name is Denis.</h1>
        <div className="prompt">
        <h2>
        <TypeAnimation
          sequence={[
            `Welcome to my website!\n I'm a DevOps engineer.`,
            1000,
            `I'm a Backend engineer with Java and Python.`,
            1000,
            `I'm expirience in QA with Selenium and automation.`,
            1000,
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
          repeat={Infinity}
        />
        </h2>
        <a href="https://twitter.com/Banigoden" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/denis.bandurin.33" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://github.com/banigoden" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/denis--bandurin/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://t.me/Bandurin_Denis" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </a>
        <a href="mailto:banigoden@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://www.instagram.com/denis__bandurin/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        </div>
      </div>
      <div className="aboutme">
      <h1> About me</h1>
      <h3>
      {<TypeAnimation
        sequence={[
        "With nine years of experience in the IT industry, I decided to transition into DevOps. Since the beginning of 2018, I have been actively studying backend and frontend development on my own. I have completed several courses on the JavaRush and Helsinki University platforms, enhancing my skills in these areas. This year, I focused on learning Kubernetes and Docker to strengthen my proficiency in containerization and orchestration. Currently, I am pursuing the AWS course. You can explore my portfolio page, which showcases projects I have developed independently. My passion lies in professional growth as a DevOps with a backend stack, with the ultimate goal of becoming an Architect. Drawing from my experience, I possess a deep understanding of DevOps features and how they can contribute to successful project outcomes."
        ]}
        speed={70}
        style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
        repeat={1}
        />} 
        </h3>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
        <li className="item">
            <h2> DevOps</h2>
            <span>
            AWS, Terraform, Docker, Kubernetes, Linux System Administration, Bash-scripting. 
            Designing a full CI/CD pipeline cycle from build to production deployment 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
            Java, Python, Spring Framework, MySQL, MongoDB 
            </span>
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JS, HTML, CSS 
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
