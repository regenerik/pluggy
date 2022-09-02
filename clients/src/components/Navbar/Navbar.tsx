//import React from 'react'
import style from "./Navbar.module.css"
//import { Link } from 'react-router-dom'

interface props{
  setActual:any;
}

const Navbar = ({setActual}:props) => {

  return (
    <div className={style.Nav}>
          <ul>
              <li>
                <button onClick={()=>setActual("quotes")}>Quotes</button>
              </li>
              <li>
                <button onClick={()=>setActual("average")}>Average</button>
              </li>
              <li>
              <button onClick={()=>setActual("slippage")}>Slip Page</button>
              </li>
            </ul>
    </div>
  )
}

export default Navbar