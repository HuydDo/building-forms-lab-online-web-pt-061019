import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, index) => {
    return <li key={index}>{band}</li>;
  });

  
  render() {
    
    return(
      <div>
        {/* BandsContainer */}
        {this.renderBands}
        {/* <BandInput addBand={this.props.addBand()}/> */}
        <BandInput />
      </div>
    )
  }
}

// export default BandsContainer
const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

// const mapDispatchToProps = dispatch => {
//   return ({
//     addBand: formData => dispatch({
//       type:'ADD_BAND',
//       payload: formData})
//   })
// }
 export default connect(mapStateToProps)(BandsContainer);
// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
