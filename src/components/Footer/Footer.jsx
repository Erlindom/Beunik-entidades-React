import React, { Component }  from "react";
import './footer.css';

class Footer extends Component {
    render () {
        return (
            <footer id='contact'>
                <h3 className='title_contact'>Conectate con nosotros</h3>
                <div className="content_contact">
                    <div>
                        <img className='img_footer' src={require('../../img/contacto.png')} alt="" />
                    </div>

                    <div className="contact">
                        <p>Envíanos tu mensaje, responderemos lo más pronto posible.</p>
                        <p className='contact_text'>
                            <i className='bx bxs-envelope icon_contact'></i> E-mail: admin@beunik.co
                        </p>
                        <p className='contact_text'>
                            <i className='bx bxl-whatsapp icon_contact' ></i> WhatsApp: 3195176868
                        </p>
                    </div>
                </div>

                <div className="background_blue">
                    <p className='beunik'>Beunik 2022</p>
                </div>

            </footer>
        )
    }
}

export default Footer;