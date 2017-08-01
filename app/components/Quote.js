import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Quote extends Component {

/*--------------------------------------------------*/
  renderCoins = (coin, index) => {
    return (
      <li key={coin[index].id}>
        <p>{coin[index].symbol}</p> 
        <p>{coin[index].name}</p> 
        <p>{coin[index].rank}</p> 
      </li>
    )
  }

/*--------------------------------------------------*/
  render() {
    let {coins} = this.props
    return(
      <ul className="coin-container">
        { coins.map(this.renderCoins) }
      </ul>
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
