import { ExternalLink } from 'react-external-link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import MailTo from '../MailTo'

export default function Contact() {
  return (
    <div className="contact container">
      <h1 className="page-title">Contact</h1>
        <h2>GET IN TOUCH</h2>
        <div className="contact-info">
          <p>If you have any questions or would like to discuss a potential project, feel free to contact me. I am always interested in working on
          exciting new projects! <br />Thank you for visiting!</p>
          <br />
          <div><p>Email: <MailTo email="novakovicmarko87@gmail.com">novakovicmarko87@gmail.com</MailTo></p></div>
          <div><p>Phone: +1 571-338-6735</p></div>
          <ul className="social-icons" style={{ marginTop: 35, marginLeft: 0, marginBottom: 0, marginRight: 0 }}>
            <li><ExternalLink href="https://github.com/markon87" target="_blank"><FaGithub />GitHub</ExternalLink></li>
            <li><ExternalLink href="https://www.linkedin.com/in/marko-novakovic-mn/" target="_blank"><FaLinkedin />LinkedIn</ExternalLink></li>
          </ul>
        </div>

    </div>
  )
}
