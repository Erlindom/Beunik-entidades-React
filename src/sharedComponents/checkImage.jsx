import React, { Component } from 'react'

class CheckImage extends Component {
  render () {
    return (
      <img
        className="check_img"
        src={require('../img/check.png')}
        alt=""
      />
    )
  }
}

export default CheckImage
