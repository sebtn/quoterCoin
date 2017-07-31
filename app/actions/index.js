import axios from 'axios'

/*------------------------------------------------------*/
export const fetchCoins = ()  => {
  return (dispatch, getState) => {
  const baseURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    return axios.get(baseURL) 
    .then( coins => dispatch(loadSuccessCoins(coins)) )
    .catch( err => console.log( 'error: ' + err ))
  }
} 

/*------------------------------------------------------*/
export function loadSuccessCoins(coins) {
  return {
    type: "FETCH_COINS", 
    coins
  }
}
