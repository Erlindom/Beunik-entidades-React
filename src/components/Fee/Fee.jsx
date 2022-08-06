import React, { Component } from 'react'
import './fee.css'

class Fee extends Component {
  render () {
    const fees = this.props.fees.map((points) =>
      <div key={points} className="fees">
        <img className="check_img" src={require('../../img/check.png')} alt="" />
        <p className="text_fee">{points}</p>
      </div>
    )

    return (
      <main className="container">

        <section className="fee_section" id="fee">
          <div className="fee_content">
            <h2 className="title_fee">Tarifa</h2>
            <p className="info_fee">Con esta suscripción podrás tener acceso de forma automática a todos los beneficios BeUnik:</p>

            {fees}

            <p className="final_fee">¡Y mucho más!</p>
          </div>

          <div>
            <img className="img_fee" src={require('../../img/fee.png')} alt="" />
          </div>
        </section>

      </main>
    )
  }
}

export default Fee
