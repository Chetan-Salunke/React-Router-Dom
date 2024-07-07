import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="navbar">
        <div className="nav">
            <Link to="/"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Services"><li>Services</li></Link>
        </div>
    </div>
  )
}
