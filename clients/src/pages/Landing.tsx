import React from 'react'
import style from "./Landing.module.css"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Article from '../components/Article/Article'
// import { useDispatch, useSelector } from 'react-redux'

// const dispatch = useDispatch()

const Landing = () => {



  return (
    <div className={style.bd}>
      <div className={style.container}>
        <header className={style.header}>
          <Header />
        </header>
        <nav className={style.navbar}>
          <Navbar />
        </nav>
        <article className={style.content}>
          <Article />
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