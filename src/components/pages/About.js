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
        <p>I am passionate about creating beautiful web solutions with engaging user experiences.
          National and international clients rely on me for design, implementation, and management of their digital products.
          Love working in a team and bringing up ideas to the table that would help realize our goal of creating a truly outstanding digital solution.</p>
        <br /><br />
          <p>I create responsive websites that are fast, easy to use, and built with best practices. 
          I have a full-stack developer experience with popular content management system (WordPress).
          The main area of my interest is Front-End development, HTML, CSS, JS, 
          building small and medium web apps, animations, and coding interactive layouts.</p>
        <br/><br/>
          <p>In my spare time I like to enjoy my reef tank or go to my local climbing gym. </p>
        <br/><br/>
          <p>Always interested in working on new and exciting projects.</p>
      </div>
      <div className="about-img">
        <img src={headshot} alt="Marko Headshot" />
        <br/><br/>
        <p>Let's make something special!</p>
        <br/><br/>
        <p><GlowMailTo email="novakovicmarko87@gmail.com" subject="Hello" body="Hello world!" glowOffset={true}>Contact me</GlowMailTo></p>
      </div>
    </div>
  )
}

export default About