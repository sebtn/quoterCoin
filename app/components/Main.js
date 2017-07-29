import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Main extends Component {
  render() {
    return(
      <div>
        <h3>I'm Main</h3>
        {this.props.children}
      </div>
    )
  }
}

export default Main
