import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import QuoteTable from './QuoteTable'

class Main extends Component {
  render() {
    return(
      <div>
        <h3>I'm Main rewired!</h3>
        {this.props.children}
        <QuoteTable />
      </div>
    )
  }
}

export default connect()(Main)
