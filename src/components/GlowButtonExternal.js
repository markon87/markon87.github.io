import { ExternalLink } from "react-external-link"

export default function GlowButtonExternal({ text, linkTo}) {
    return (
        <ExternalLink href={linkTo} target="_blank" className="button glow-effect" data-glow-offset="true">
            {text}
            <svg className="glow-container">
                <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-blur"></rect>
                <rect pathLength={100} rx="2px" strokeLinecap="round" className="glow-line"></rect>
            </svg>
        </ExternalLink>
    )
}
