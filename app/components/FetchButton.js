import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchCoins, loadSuccessCoins } from '../actions/index'

class ButtonFetch extends Component {
/*------------------------------------------------------*/
  handleClick = () =>  {
    let {dispatch} = this.props
    dispatch( fetchCoins() )
  }

/*------------------------------------------------------*/
  render() {
    return(
      <div className="button-container">
        <button className="btn btn-primary btn-lg fetch-btn"
          onClick = { () => this.handleClick() }>
          Fetch Coins
        </button>        
      </div>
    )
  }
}

export default connect()(ButtonFetch)
