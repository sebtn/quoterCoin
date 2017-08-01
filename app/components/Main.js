import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Quote from './Quote'
import FetchButton from './FetchButton'

class Main extends Component {
  render() {
    return(
      <div className="container">
        <h1>Live Crypto Currencies Quotes</h1>
        <FetchButton />
        <Quote />
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Main)
