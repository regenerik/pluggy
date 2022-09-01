import React from 'react'
import style from "./Landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.bd}>
      <div className={style.container}>
        <header className={style.header}>Header</header>
        <nav className={style.navbar}>
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
        </nav>
        <article className={style.content}>
          <h1>Contenido principal</h1>
        </article>
        <aside className={style.side}>Sidebar</aside>
        <footer className={style.footer}>Footer</footer>
      </div>
    </div>
  )
}

export default Landing