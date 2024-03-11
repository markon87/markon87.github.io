import MarkoResume from '../../Marko-Novakovic-resume.pdf'
import CirclePdfLink from '../CirclePdfLink'


export default function Resume() {
  return (
    <div className="experience container">
      <h1 className="page-title">Experience</h1>
      <h2>WORKPLACES</h2>
      <CirclePdfLink pdfLink={MarkoResume} />
      <div className="experience-wrapper">
        <div className="experience-left">
          <h3>Glimmernet Technologies, Bethesda, MD</h3>
          <p><strong>Web developer & designer</strong></p>
          <p>(Aug 2017 - Present)</p>
          <ul>
            <li> Oversee the full life cycle of website development</li>
            <li> Lead project development from start to finish.</li>
            <li>Communicate with clients and ensure that all requests are met.</li>
            <li>Design and develop cross-browser responsive websites in WordPress.</li>
            <li>Customize WordPress themes and plugins to fit projects’ needs.</li>
            <li>Advise on project time estimation and find the most optimal solutions.</li>
            <li>Develop eCommerce solutions for online stores that help clients to
              increase their sales.</li>
            <li>Fix bugs on existing websites and implement solutions that
              significantly improve web functionalities and speed.</li>
          </ul>
          <br />
          <h3>HORISEN Marketing Technology, Niš, Serbia</h3>
          <p><strong>Front-end developer</strong></p>
          <p>(Dec 2013 – May 2017)</p>
          <ul>
            <li>Developed mobile-first dynamic and interactive websites from PSD files
              that increased page visits and sales revenue.</li>
            <li>Created website layouts using CSS framework (Bootstrap).</li>
            <li>Implemented functionalities to websites using JavaScript (jQuery).</li>
            <li>Maintained old websites (updated content and applied new designs and functionalities).</li>
            <li>Designed a dashboard for the company's custom Content Management System (CMS).</li>
            <li>Made content changes in MySQL database and created update scripts.</li>
            <li>Mentored a new developer joining the team.</li>
          </ul>
        </div>
        <div className="experience-right">
          <h3>Technical skills:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS (SASS)</li>
            <li>JavaScript (ReactJS, VueJS, NodeJS)</li>
            <li>BEM methodology</li>
          </ul>

          <h3>Tools:</h3>
          <ul>
            <li>Version control software (Git and SVN)</li>
            <li>FTP clients (FileZilla or WinSCP)</li>
            <li>Task runners (Grunt, Gulp)</li>
            <li>Adobe Photoshop and Adobe Illustrator</li>
          </ul>

          <h3>Languages:</h3>
          <ul>
            <li>English (fluent)</li>
            <li>Serbian (native)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
