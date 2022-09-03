import style from "./Navbar.module.css"

interface props{
  setActual:any;
}

const Navbar = ({setActual}:props) => {

  return (
    <div className={style.Nav}>

              <button onClick={()=>setActual("quotes")}>Cotizaciones</button>

              <button onClick={()=>setActual("average")}>Promedios</button>

              <button onClick={()=>setActual("slippage")}>Diferencias</button>

    </div>
  )
}

export default Navbar