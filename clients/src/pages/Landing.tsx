import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getInfoDollarBlue } from '../redux/actions'
import style from "./Landing.module.css"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Article from '../components/Article/Article'


const Landing = () => {

  const [actual,setActual] = useState("quotes")

  const dispatch = useAppDispatch()

  setInterval(()=>{
    dispatch(getInfoDollarBlue())
  }, 15000);

  return (
    <div className={style.bd}>
      <div className={style.container}>
        <header className={style.header}>
          <Header />
        </header>
        <nav className={style.navbar}>
          <Navbar setActual={setActual} />
        </nav>
        <article className={style.content}>
          <Article actual={actual}/>
        </article>
        <aside className={style.side}>
          <Sidebar />
        </aside>
        <footer className={style.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Landing