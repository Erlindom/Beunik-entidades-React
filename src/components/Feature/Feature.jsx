import React, { Component } from 'react'
import './feature.css'
import CheckImage from '../../sharedComponents/checkImage'

class Feature extends Component {
  render () {
    const featurePoints = this.props.featurePoints.map((points) =>
      <div key={points} className="check">
        <CheckImage />
        <p className="feature_info">{points}</p>
      </div>
    )

    return (
      <div className="features_tiles">

        <div className="image_title">
          <img
            className="feature_img"
            src={require(`../../img/${this.props.image}.png`)}
            alt=""
          />
          <h3 className="color_title">{this.props.title}</h3>
        </div>

        {featurePoints}

      </div>
    )
  }
}

export default Feature
