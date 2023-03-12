import headshot from "../../images/headshot.jpeg"
import GlowMailTo from "../GlowMailTo"

function About() {
  return (
    <div className="container about">
      <h1 className="page-title">About me</h1>
      <div className="about-desc">
        <h2>Hi! I'm Marko,</h2>
        <h3>A creative Front-End Developer located in Bethesda, MD.</h3>
        <br />
        <p>I am passionate about creating beautiful and responsive web
solutions with engaging user-friendly experiences. With years of
experience in the industry, national and international clients
rely on me for design, implementation, and management of their
digital products. I love working in a team and bring up ideas
that help us create truly outstanding digital solutions.</p>
        <br /><br />
          <p>The websites that I deliver are built with the best practices
and optimized for performance and accessibility while meeting
the clients’ needs and expectations. I have a full-stack
developer experience with popular content management system
(WordPress). My main areas of interest are Front-End
development, HTML, CSS, JS, building small and medium web apps,
animations, and coding interactive layouts.</p>
        <br/><br/>
          <p>In my spare time, I enjoy working on my reef tank and go to my
local climbing gym.</p>
        <br/><br/>
          <p>Please feel free to browse through my website and learn more
about my skills and experience. If you have any questions or
would like to discuss a potential project, please do not
hesitate to get in touch. I am always interested in working on
exciting new projects! Thank you for visiting!</p>
      </div>
      <div className="about-img">
        <div className="headshot-container">
          <img src={headshot} alt="Marko Headshot" className="headshot" />
          <svg className="rotate-container">
            <circle cx="145" cy="145" r="140" className="rotate-line"></circle>
          </svg>
        </div>
        <br/><br/>
        <p>Let's make something special!</p>
        <br/><br/>
        <p><GlowMailTo email="novakovicmarko87@gmail.com" subject="Hello" body="Hello world!" glowOffset={true}>Contact me</GlowMailTo></p>
      </div>
    </div>
  )
}

export default About