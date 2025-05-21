import headshot from "../../images/headshot.jpeg"
import GlowMailTo from "../GlowMailTo"

function About() {
  return (
    <div className="container about">
      <h1 className="page-title">About me</h1>
      <div className="about-desc">
        <h2>Hi! I'm Marko,</h2>
        <h3>A creative Frontend Engineer located in Bethesda, MD.</h3>
        <br />
        <p>I am a frontend engineer specializing in building modern ReactJS applications that are fast, scalable, and user-focused. My work centers on developing clean, reusable interfaces that integrate with RESTful APIs and bring complex data to life through clear, intuitive visualizations.</p>
        <br />
        <p>With many years of professional experience, I have led frontend efforts on projects ranging from internal dashboards to enterprise-level platforms—often taking ownership from concept to launch in agile, cross-functional teams. I enjoy solving technical challenges through thoughtful UI architecture, performance optimization, and scalable component systems.</p>
        <br />
        <p>My recent work includes building data-driven applications that automate manual processes and help users interact with large datasets more effectively. I care deeply about crafting experiences that are not only functional and visually polished, but also accessible and maintainable.</p>
        <br />
        <p>While my background includes full-stack development and CMS platforms like WordPress, my current focus is on React, HTML/CSS/JavaScript, data visualization, and API integration. I also work with tools like Docker, AWS, and Azure DevOps, and I am always exploring new technologies that help improve developer workflow and end-user experience.</p>
        <br />
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