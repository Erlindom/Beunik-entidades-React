import React, { Component }  from "react";
import './features.css';

class Features extends Component {

    render () {
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

            <div className="check">
              <img
                className="check_img"
                src={require(`../../img/${this.props.check}.png`)}
                alt=""/>
              <p className="feature_info">{this.props.feature_1}</p>
            </div>

            <div className="check">
              <img
                className="check_img"
                src={require(`../../img/${this.props.check}.png`)}
                alt=""
              />
              <p className="feature_info">{this.props.feature_2}</p>
            </div>

            <div className="check">
              <img
                className="check_img"
                src={require(`../../img/${this.props.check}.png`)}
                alt=""
              />
              <p className="feature_info">{this.props.feature_3}</p>
            </div>
          </div>
        );
    }
}

export default Features;