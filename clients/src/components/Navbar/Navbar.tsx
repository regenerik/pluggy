//import React from 'react'
import style from "./Navbar.module.css"
//import { Link } from 'react-router-dom'

interface props{
  setActual:any;
}

const Navbar = ({setActual}:props) => {

  return (
    <div className={style.Nav}>

              <button onClick={()=>setActual("quotes")}>Quotes</button>

              <button onClick={()=>setActual("average")}>Average</button>

              <button onClick={()=>setActual("slippage")}>Slip Page</button>

    </div>
  )
}

export default Navbar