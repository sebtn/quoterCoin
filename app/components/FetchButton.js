import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {simpleFetch} from '../actions/index'
import {fetchCoins} from '../actions/index'

class ButtonFetch extends Component {
/*------------------------------------------------------*/
  handleClick = () =>  {
    let {dispatch} = this.props
    dispatch( fetchCoins() )
    // dispatch( simpleFetch() )
  }

/*------------------------------------------------------*/
  render() {
    return(
      <div>
        <button 
          onClick = {  this.handleClick }>
          Fetch Coins
        </button>
      </div>
    )
  }
}

export default connect()(ButtonFetch)
