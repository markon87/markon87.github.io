import { Link, Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import { useState } from "react"

export default function RootLayouts(){
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = ()=> setIsOpen(!isOpen)

  return (
    <div className="root-layout">
        <header>
            <div className="header-wrapper">
              <div className="logo-container">
                <Link to="/"><Logo /></Link>
              </div>
              <div className={`navigation-container ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}><span></span><span></span><span></span></div>
                <Navigation />
              </div>
            </div>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}