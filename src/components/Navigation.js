import { NavLink } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import GlowButtonExternal from "./GlowButtonExternal"
import MarkoResume from '../Marko-Novakovic-resume.pdf'

export default function Header() {
  return (
      <nav>
          <NavLink to="/">Home <FaArrowRight /></NavLink>
          <NavLink to="/about">About <FaArrowRight /></NavLink>
          <NavLink to="/experience">Experience <FaArrowRight /></NavLink>
          <NavLink to="/my-work">My Work <FaArrowRight /></NavLink>
          <NavLink to="/contact">Contact <FaArrowRight /></NavLink>
          <GlowButtonExternal text="Resume" linkTo={MarkoResume} />
      </nav>
  )
}