import React, { useEffect } from 'react'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'
import { getInfoDollarBlue } from '../../redux/actions'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import style from "./Article"


const Article = () => {

 

  const {quotes, average, slippage} = useAppSelector(state=>state)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch( getInfoDollarBlue())
  },[dispatch])

  return (
    <div>
      <div>
        <span>quotes</span>
        <br />
        {quotes?.map((e:any)=>{
          return(
            <>
              <span>{e.buy_price}</span>
              <br />
              <span>{e.sell_price}</span>
              <br />
              <span>{e.source}</span>
              <br />
            </>
          )
        })}
        <br />
        <br />
      </div>
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
      <div>
      <span>average</span>
      <br />
      <span>{average.average_buy_price}</span>
      <br />
      <span>{average.average_sell_price}</span>
      </div>
    </div>
  )
}

export default Article