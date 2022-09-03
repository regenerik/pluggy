import { useAppSelector } from '../../redux/hooks'
import style from "./Article.module.css"

interface props {
  actual:string;
}

const Article = ({actual}:props): JSX.Element => {

 

  const {quotes, average, slippage} = useAppSelector(state=>state)

  if(!actual) return <span>cargando...</span>

  return (
    <div>
      {
        actual ==="quotes"?
      <div className={style.contenedorCotiz}>

        <br />
        <br />
        {quotes?.map((e:any,i:number)=>{
          return(
            <div className={style.cardQuotes} key={i}>

              <div className={style.col1}>
                <h4>Fuente: </h4>
                <a href={e.source} target="_BLANK" rel="noreferrer">
                  <h4>{e.name}</h4>
                </a>
              </div>

              <div className={style.col2}>
                <h4>Compra: </h4>
                <span>U$D {e.buy_price}</span>
              </div>

              <div className={style.col3}>
                <h4>Venta: </h4>
                <span>U$D {e.sell_price}</span>
              </div>

            </div>
          )
        })}
        <br />
        <br />
      </div>
      :actual==="slippage"?
        <div>
          <span>slippage</span>
          <br />
          {slippage?.map((e:any)=>{
          return(
            <>
            <span>{e.buy_price_slippage}</span>
            <br />
            <span>{e.sell_price_slippage}</span>
            <br />
            <span>{e.source}</span>
            <br />
          </>
          )
          })}
          <br />
          <br />
        </div>
        :
        <div>
            <span>average</span>
          <br />
          <span>{average.average_buy_price}</span>
          <br />
          <span>{average.average_sell_price}</span>
          </div> 
        }
    </div>
  )
}

export default Article