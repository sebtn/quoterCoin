import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Quote extends Component {
  renderCoinList = () => {
    let {coinList} = this.props.coins
    console.log(coinList)
  }

  render() {
    return(
      <div className="table-container">
        {this.renderCoinList}
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return { coins: state.coins, 
    console: console.log(state) }
}

export default connect(mapStateToProps)(Quote)
