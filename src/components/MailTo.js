
const MailTo = ({ email, subject, body, ...props }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`} className="link-simple">
        {props.children}
    </a>
  )
}

export default MailTo