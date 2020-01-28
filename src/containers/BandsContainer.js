import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import addBand from '../action'

class BandsContainer extends Component {
  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
    {this.props.bands.map(band => <li> {band.name}</li>)}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps, {addBand})(BandsContainer)
