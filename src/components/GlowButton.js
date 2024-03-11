import {Link} from "react-router-dom"

function GlowButton( {buttonText, glowOffset, linkTo, buttonInline} ) {
  return (
    <p className={ buttonInline ? "button-wrapper inline" : "button-wrapper" }>
      <Link to={linkTo} className="button glow-effect" data-glow-offset={ glowOffset ? "true" : "" }>
          {buttonText}
          <svg className="glow-container">
            <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-blur"></rect>
            <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-line"></rect>
          </svg>
      </Link>
    </p>
  )
}

export default GlowButton