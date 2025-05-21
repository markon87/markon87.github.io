import headshot from "../../images/headshot.jpeg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import MailTo from "../MailTo";



function Home() {
  return (
    <div className="container home">
      <h1 className="page-title">Welcome</h1>
      <div className="welcome-box">
        <div className="headshot-container">
          <Link to="/about">
          <img src={headshot} alt="Marko Headshot" className="headshot" />
          <svg className="rotate-container">
            <circle cx="145" cy="145" r="140" className="rotate-line"></circle>
          </svg>
          </Link>
        </div>
        <h1>Hi! I am Marko Novaković</h1>
        <h3>A creative Frontend Engineer located in Bethesda, MD</h3>
        <div className="contact-info">
          <div><p>Email: <MailTo email="novakovicmarko87@gmail.com">novakovicmarko87@gmail.com</MailTo></p></div>
          <div><p>Phone: +1 571-338-6735</p></div>
          <ul className="social-icons">
            <li><ExternalLink href="https://github.com/markon87" target="_blank"><FaGithub />GitHub</ExternalLink></li>
            <li><ExternalLink href="https://www.linkedin.com/in/marko-novakovic-mn/" target="_blank"><FaLinkedin />LinkedIn</ExternalLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home