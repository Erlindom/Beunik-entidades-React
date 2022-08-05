<<<<<<< HEAD
import React, { Component }  from "react";
import './fee.css';

class Fee extends Component {
    render () {
        return (
            <main className="container">

                <section className="fee_section" id="fee">
                    <div className="fee_content">
                        <h2 className="title_fee">Tarifa</h2>
                        <p className="info_fee">Con esta suscripción podrás tener acceso de forma
                        automática a todos los beneficios BeUnik:</p>

                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Creación de perfil con imagen de entidad y logo.</p>
                        </div>
                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Agregar profesionales de forma ilimitada.</p>
                        </div>
                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Agregar servicios de forma ilimitada.</p>
                        </div>
                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Agregar muestras de trabajo de forma ilimitada.</p>
                        </div>
                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Dashboard de analítica.</p>
                        </div>
                        <div className="fees">
                            <img className="check_img" src={require('../../img/check.png')} alt="" />
                            <p className="text_fee">Agregar agendas manuales y automáticas ilimitadas.</p>
                        </div>
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

export default Fee;
=======
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
>>>>>>> 3f67a72 (Update v2)
