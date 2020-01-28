// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }
  
  handleChange = (evt) => {
    this.setState({
      name: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    let band = {name: this.state.name}
    this.props.addBand(band)

    this.setState({
      name: ''
    })
    
  }
  render() {
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add band</label>
          <input onChange={this.handleChange} type="text" value={this.state.name}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
