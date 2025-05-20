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
          <h3>Data Society Group, Washington, D.C.</h3>
          <p><strong>Frontend Engineer</strong></p>
          <p>(Jun 2024 - Present)</p>
          <ul>
            <li>Led frontend development as the primary engineer on a key project, which successfully led to a new
            contract valued over $1M.</li>
            <li>Build and maintain ReactJS applications that integrate with RESTful APIs using RTK Query for
            efficient data fetching and caching.</li>
            <li>Collaborate closely with cross-functional teams, ensure high-quality delivery within timelines and
            promote best practices for development efficiency.</li>
            <li>Collaborate on projects using technologies like Azure DevOps, Docker, Snowflake, AWS (S3,
            Athena, API Gateway), and Terraform.</li>
            <li>Create reusable components that enhance development speed and code maintainability across
            multiple teams and projects.</li>
          </ul>
          <br />
          <h3>Glimmernet Technologies, Bethesda, MD</h3>
          <p><strong>Web Developer & Designer</strong></p>
          <p>(Aug 2017 - Jun 2024)</p>
          <ul>
            <li>Oversaw the full life cycle of website development</li>
            <li>Led project development from start to finish.</li>
            <li>Communicated with clients and ensured that all requests are met.</li>
            <li>Designed and developed cross-browser responsive websites in WordPress.</li>
            <li>Customized WordPress themes and plugins to fit projects’ needs.</li>
            <li>Advised on project time estimation and found the most optimal solutions.</li>
            <li>Developed eCommerce solutions for online stores that help clients to
              increase their sales.</li>
            <li>Fixed bugs on existing websites and implemented solutions that
              significantly improved web functionalities and speed.</li>
          </ul>
          <br />
          <h3>HORISEN Marketing Technology, Niš, Serbia</h3>
          <p><strong>Frontend Developer</strong></p>
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
            <li>CSS (SASS), Material UI</li>
            <li>JavaScript (ReactJS, jQuery)</li>
            <li>RTK Query, Redux, REST APIs</li>
            <li>NodeJS, Express</li>
            <li>Wordpress</li>
          </ul>

          <h3>Tools:</h3>
          <ul>
            <li>Version control software (Git, GitHub)</li>
            <li>Visual Studio Code</li>
            <li>Task runners (Grunt, Gulp)</li>
            <li>Jira</li>
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
