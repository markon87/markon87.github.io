import MarkoResume from "../../Marko-Novakovic-resume.pdf";
import CirclePdfLink from "../CirclePdfLink";

export default function Resume() {
  return (
    <div className="experience container">
      <h1 className="page-title">Experience</h1>
      <h2>WORKPLACES</h2>
      <CirclePdfLink pdfLink={MarkoResume} />
      <div className="experience-wrapper">
        <div className="experience-left">
          <h3>Glimmernet Technologies, Bethesda, MD</h3>
          <p>
            <strong>Web developer & designer</strong>
          </p>
          <p>(Aug 2017 - Present)</p>
          <ul>
            <li>
              Lead the full life cycle of website development projects,
              overseeing from conception to deployment, ensuring seamless
              execution and client satisfaction.
            </li>
            <li>
              Manage project development, coordinating tasks and resources to
              meet deadlines and quality standards.
            </li>
            <li>
              Maintain proactive communication with clients, understanding their
              requirements and ensuring all requests are accurately addressed.
            </li>
            <li>
              Design and develop responsive websites using WordPress, employing
              HTML5, CSS3, JavaScript, and PHP to ensure cross-browser
              compatibility and optimal user experience.
            </li>
            <li>
              Customize WordPress themes and plugins to align with project
              specifications.
            </li>
            <li>
              Leveraging Adobe Creative Suite to refine client-provided images
              and graphics.
            </li>
            <li>
              Transform design concepts from Photoshop files or Figma into
              functional websites, ensuring fidelity to the original vision
              while optimizing for web performance.
            </li>
            <li>
              Successfully manage a diverse portfolio of over 70 website
              development projects, showcasing adaptability and expertise across
              various industries and client requirements.
            </li>
            <li>
              Maintain a reputation for delivering exceptional work, effective
              communication, and timely solutions, consistently achieving high
              levels of customer satisfaction.
            </li>
            <li>
              Develop responsive websites optimized for multiple screen sizes
              and ensure compatibility across various browsers, ensuring a
              seamless user experience regardless of device or platform.
            </li>
            <li>
              Provide accurate project time estimates, balancing client
              expectations with realistic development timelines.
            </li>
            <li>
              Act as a consultant to clients, suggesting optimal solutions and
              advising on eCommerce strategies to enhance online sales.
            </li>
            <li>
              Implement bug fixes and performance enhancements on existing
              websites, significantly improving functionality and speed.
            </li>
            <li>
              Conduct presentations and demos to showcase project progress,
              maintaining transparent communication and keeping clients informed
              throughout the development process.
            </li>
          </ul>
          <br />
          <h3>HORISEN Marketing Technology, Niš, Serbia</h3>
          <p>
            <strong>Front-end developer</strong>
          </p>
          <p>(Dec 2013 – May 2017)</p>
          <ul>
            <li>
              Developed mobile-first dynamic and interactive websites from PSD
              files that increased page visits and sales revenue.
            </li>
            <li>Created website layouts using CSS framework (Bootstrap).</li>
            <li>
              Implemented functionalities to websites using JavaScript (jQuery).
            </li>
            <li>
              Maintained old websites (updated content and applied new designs
              and functionalities).
            </li>
            <li>
              Designed a dashboard for the company's custom Content Management
              System (CMS).
            </li>
            <li>
              Made content changes in MySQL database and created update scripts.
            </li>
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
  );
}
