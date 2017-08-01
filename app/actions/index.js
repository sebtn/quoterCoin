import axios from 'axios'

/*------------------------------------------------------*/
export const fetchCoins = ()  => {
  return (dispatch, getState) => {
  const baseURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    return axios.get(baseURL)   
    .then( (coins) => {
      // Object.keys(coins.data).map((e) => console.log(`key=${e}  value=${coins.data[e]}`))
      let keys = Object.keys(coins.data)
      let values = keys.map((x) =>  coins.data[x] )
      console.log('val', values)
      dispatch(loadSuccessCoins(values))
    })
  }
} 

/*------------------------------------------------------*/
export function loadSuccessCoins(values) {
  return {
    type: "FETCH_COINS", 
    coins: values
  }
}

/*------------------------------------------------------*/
export let simpleFetch = () => {
  const request = axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  return {
    type: "FETCH_COINS", 
    payload: request
  }
}
