import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {


  
  return (
    <div className={style.Nav}>
          <ul>
              <li>
                <Link to="">Nav1</Link>
              </li>
              <li>
                <Link to="">Nav2</Link>
              </li>
              <li>
                <Link to="">Nav3</Link>
              </li>
            </ul>
    </div>
  )
}

export default Navbar