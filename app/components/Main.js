import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Quote from './Quote'
import FetchButton from './FetchButton'

class Main extends Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">          
          <FetchButton />
          <Quote />
          {this.props.children}
        </div>
        <div className="col-lg-4"></div>
      </div>
    )
  }
}

export default connect()(Main)
