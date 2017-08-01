import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {simpleFetch} from '../actions/index'

class Quote extends Component {

/*--------------------------------------------------*/
  renderCoins = () => {
    let {coins} = this.props
    return coins.map(coin => {
      return <tr key={coin.rank}> 
        <td> {coin.rank} </td>
        <td> {coin.name} </td>
        <td> {coin.symbol} </td>
        <td> {coin.price_usd} </td>
        <td> {coin.percent_change_1h} </td>
        <td> {coin.percent_change_24h} </td>
        <td> {coin.percent_change_7d} </td>
        <td> {coin.market_cap_usd} </td>
      </tr> 
    })
  }

/*--------------------------------------------------*/
  render() {
    return(

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>1H</th>
            <th>1D</th>
            <th>1W</th>
            <th>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCoins()}
        </tbody>
      </table>
    )
  }
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
/*Coin key is also found inside rootReducer, since coins 
is part of app main state this.props.coins is available 
inside component*/
  return { coins: state.coins }
}

export default connect(mapStateToProps)(Quote)
