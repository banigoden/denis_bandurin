import React, { useEffect, useRef, useState } from "react";
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
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      });
    }, observerOptions);

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsSkillsVisible(true);
        }
      });
    }, observerOptions);

    if (aboutmeRef.current) {
      aboutObserver.observe(aboutmeRef.current);
    }
    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (aboutmeRef.current) {
        aboutObserver.unobserve(aboutmeRef.current);
      }
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

   return (
    <div className="home">
      <div className="about">   
      <div className="myimage">
       <img src={photo} alt="Denis Bandurin" />
      </div>
        <h1 className="fade-in-up"> Hi, My Name is Denis.</h1>
        <div className="prompt fade-in-up-delay">
        <h2>
        <TypeAnimation
          sequence={[
            `Welcome to my website!\n I'm a DevOps engineer.`,
            1000,
            `I'm a Backend engineer with Java and Python.`,
            1000,
            `I have experience in QA with Selenium and automation.`,
            1000,
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
          repeat={Infinity}
        />
        </h2>
        <div className="social-icons">
        <a href="https://twitter.com/Banigoden" target="_blank" rel="noopener noreferrer" className="social-link">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/denis.bandurin.33" target="_blank" rel="noopener noreferrer" className="social-link">
          <FacebookIcon />
        </a>
        <a href="https://github.com/banigoden" target="_blank" rel="noopener noreferrer" className="social-link">
        <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/denis--bandurin/" target="_blank" rel="noopener noreferrer" className="social-link">
          <LinkedInIcon />
        </a>
        <a href="https://t.me/Bandurin_Denis" target="_blank" rel="noopener noreferrer" className="social-link">
          <TelegramIcon />
        </a>
        <a href="mailto:banigoden@gmail.com" className="social-link">
          <EmailIcon />
        </a>
        <a href="https://www.instagram.com/denis__bandurin/" target="_blank" rel="noopener noreferrer" className="social-link">
          <InstagramIcon />
        </a>
        </div>
      </div>
      </div>
      <div className={`aboutme ${isAboutVisible ? 'fade-in' : ''}`} ref={aboutmeRef}>
      <h1> About me</h1>
      <div className="aboutme-content">
        <div className="aboutme-text">
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
        <div className="video-container">
          <div className="video-wrapper">
            <video 
              className="about-video"
              controls
              controlsList="nodownload"
              poster=""
              preload="metadata"
            >
              <source src="/videos/about-me.mp4" type="video/mp4" />
              <source src="/videos/about-me.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <button 
              className="fullscreen-btn"
              onClick={(e) => {
                const video = e.target.previousElementSibling;
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                  video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                  video.msRequestFullscreen();
                }
              }}
              aria-label="Fullscreen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <p className="video-note">Upload your video to the <code>public/videos/</code> folder and name it <code>about-me.mp4</code></p>
        </div>
      </div>
      </div>
      <div className={`skills ${isSkillsVisible ? 'fade-in' : ''}`} ref={skillsRef}>
        <h1> Skills</h1>
        <ol className="list">
        <li className={`item ${isSkillsVisible ? 'slide-in-left' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h2> DevOps</h2>
            <span>
            AWS, Terraform, Docker, Kubernetes, Linux System Administration, Bash-scripting. 
            Designing a full CI/CD pipeline cycle from build to production deployment 
            </span>
          </li>
          <li className={`item ${isSkillsVisible ? 'slide-in-right' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h2>Back-End</h2>
            <span>
            Java, Python, Spring Framework, MySQL, MongoDB 
            </span>
          </li>
          <li className={`item ${isSkillsVisible ? 'slide-in-left' : ''}`} style={{ animationDelay: '0.5s' }}>
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
