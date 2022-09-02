import axios from "axios"
export const GET_INFO_DOLLAR_BLUE = "get_info_dollar_blue"

export async function getInfoDollarBlue():Promise<any>{

    return async function(dispatch:any){
        try{
            const quotes = (await axios.get("http://localhost:3001/quotes")).data
            const average = (await axios.get("http://localhost:3001/average")).data
            const slippage = (await axios.get("http://localhost:3001/slippage")).data
            return dispatch({
                type: GET_INFO_DOLLAR_BLUE,
                payload:{quotes,average,slippage}
            })
        }catch(err:any){
            console.log(err.message)
        }
    }

}