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
              Lead full life cycle of website projects from conception to
              deployment, ensuring client satisfaction.
            </li>
            <li>
              Managed project development, coordinating tasks to meet deadlines
              and quality standards.
            </li>
            <li>
              Maintained proactive client communication, addressing all
              requirements accurately.
            </li>
            <li>
              Designed and developed responsive WordPress websites, ensuring
              cross-browser compatibility and optimal UX.
            </li>
            <li>
              Customized WordPress themes and plugins to project specifications.
            </li>
            <li>
              Utilized Adobe Creative Suite to refine client-provided graphics.
            </li>
            <li>
              Translated design concepts into functional websites, optimizing
              for performance.
            </li>
            <li>
              Successfully managed 70+ diverse website projects, showcasing
              adaptability.
            </li>
            <li>
              Maintained a reputation for exceptional work, effective
              communication, and timely solutions.
            </li>
            <li>
              Developed responsive websites for various screen sizes and
              browsers, ensuring seamless user experience.
            </li>
            <li>
              Provided accurate project time estimates, balancing client
              expectations.
            </li>
            <li>
              Suggested optimal solutions and eCommerce strategies to enhance
              sales.
            </li>
            <li>
              Implemented bug fixes and performance enhancements, improving
              functionality.
            </li>
            <li>
              Conducted presentations to keep clients informed throughout
              development.
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
