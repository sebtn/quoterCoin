import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchCoins} from '../actions/index'

class QuoteTable extends Component {
  componentWillMount = () => {
    fetchCoins()
  }
  render() {
    return(
        <div>
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
            </tbody>
            </table>
        </div>
    )
  }
}

export default connect()(QuoteTable)
