// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux';
class BandInput extends Component {
  constructor(){
    super()
    this.state= {
      name: ''
    }
  }
 
  handleOnChange = (event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        {/* Band Input */}
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input 
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} /> 
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
