
const GlowMailTo = ({ glowOffset, email, subject, body, ...props }) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`} className="button glow-effect" data-glow-offset={ glowOffset ? "true" : "" }>
          {props.children}
          <svg className="glow-container">
            <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-blur"></rect>
            <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-line"></rect>
          </svg>
      </a>
    )
  }
  
  export default GlowMailTo