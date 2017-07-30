import axios from 'axios'

export let fetchCoins = (coins) => {
  const baseURL = 'https://www.cryptocompare.com/api/data/coinlist'
  // return (dispatch) => {
    axios.get(`${baseURL}`)
    .then( res => console.log(res.data) )
  // }
}