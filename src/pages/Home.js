import React, { useEffect, useRef, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";
import photo from "../assets/myphoto.png";

function Home() {
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const videoRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const aboutmeElement = aboutmeRef.current;
    const skillsElement = skillsRef.current;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      });
    }, observerOptions);

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSkillsVisible(true);
        }
      });
    }, observerOptions);

    if (aboutmeElement) {
      aboutObserver.observe(aboutmeElement);
    }
    if (skillsElement) {
      skillsObserver.observe(skillsElement);
    }

    return () => {
      if (aboutmeElement) {
        aboutObserver.unobserve(aboutmeElement);
      }
      if (skillsElement) {
        skillsObserver.unobserve(skillsElement);
      }
    };
  }, []);

  // Video always fullscreen background effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video attributes for better mobile support
    video.muted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    // Function to play video
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented - this is normal on some mobile browsers
          // Silently handle autoplay prevention
        });
      }
    };

    // Try to play immediately
    playVideo();

    // Also try after user interaction (for mobile browsers)
    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("click", handleUserInteraction, { once: true });

    // Handle video loading errors
    const handleError = () => {
      // Video failed to load - silently handle error
      // Check browser console for details if needed
    };

    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("error", handleError);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
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
              style={{ whiteSpace: "pre-line", fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <div className="social-icons">
            <a
              href="https://twitter.com/Banigoden"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.facebook.com/denis.bandurin.33"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://github.com/banigoden"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/denis--bandurin/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://t.me/Bandurin_Denis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <TelegramIcon />
            </a>
            <a href="mailto:banigoden@gmail.com" className="social-link">
              <EmailIcon />
            </a>
            <a
              href="https://www.instagram.com/denis__bandurin/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      {/* Fullscreen video background */}
      <div className="video-background">
        <video
          ref={videoRef}
          className="about-video-fullscreen"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
        >
          <source src="/videos/about-me.MP4" type="video/mp4" />
          <source src="/videos/about-me.mp4" type="video/mp4" />
          <source src="/videos/about-me.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text overlay on video */}
      <div
        className={`aboutme ${isAboutVisible ? "fade-in" : ""}`}
        ref={aboutmeRef}
      >
        <h1> About me</h1>
        <div className="aboutme-content">
          <div className="aboutme-text">
            <h3>
              {
                <TypeAnimation
                  sequence={[
                    "With nine years of experience in the IT industry, I decided to transition into DevOps. Since the beginning of 2018, I have been actively studying backend and frontend development on my own. I have completed several courses on the JavaRush and Helsinki University platforms, enhancing my skills in these areas. This year, I focused on learning Kubernetes and Docker to strengthen my proficiency in containerization and orchestration. Currently, I am pursuing the AWS course. You can explore my portfolio page, which showcases projects I have developed independently. My passion lies in professional growth as a DevOps with a backend stack, with the ultimate goal of becoming an Architect. Drawing from my experience, I possess a deep understanding of DevOps features and how they can contribute to successful project outcomes.",
                  ]}
                  speed={70}
                  style={{ whiteSpace: "pre-line", fontSize: "1em" }}
                  repeat={1}
                />
              }
            </h3>
          </div>
        </div>
      </div>
      <div
        className={`skills ${isSkillsVisible ? "fade-in" : ""}`}
        ref={skillsRef}
      >
        <h1> Skills</h1>
        <ol className="list">
          <li
            className={`item ${isSkillsVisible ? "slide-in-left" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h2> DevOps</h2>
            <span>
              AWS, Terraform, Docker, Kubernetes, Linux System Administration,
              Bash-scripting. Designing a full CI/CD pipeline cycle from build
              to production deployment
            </span>
          </li>
          <li
            className={`item ${isSkillsVisible ? "slide-in-right" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h2>Back-End</h2>
            <span>Java, Python, Spring Framework, MySQL, MongoDB</span>
          </li>
          <li
            className={`item ${isSkillsVisible ? "slide-in-left" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            <h2> Front-End</h2>
            <span>ReactJS, JS, HTML, CSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
