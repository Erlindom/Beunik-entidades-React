<<<<<<< HEAD
import React, { Component }  from "react";
import { Link } from "react-router-dom";
import './tutorial.css';
import logo_white from '../../img/logo_white.svg';



class Tutorial extends Component {
    render () {
        return (
            <section className="container_tutorials">
                <div className="navegation_contentTutorial">   
                    <div>
                        <img className="logo_beunikTutorial" src={logo_white} alt="" />
                    </div>
                  
                    <nav className="content_nav_tutorials">
                        <Link to={"/"} className='navLink_tutorial'>
                        <i className="bx bx-home-alt-2 navIcon_tutorial"></i> Volver al Home </Link>
                    </nav>
                </div>

                <section>
                    <div className="contentTitle_tutorial">
                        <h1 className="h1_tutorial">Tutoriales BeUnik Pro</h1>
                        <div className="links_tutorial">
                            <a className="links_anclaTutorial" href="#entidades">Ver para Entidades</a>
                            <a className="links_anclaTutorial" href="#profesionales">Ver para Profesinales</a>
                        </div>
                    </div>
                    
                    <div className="content_videos" id="entidades">
                        <h2 className="title_tutorials">Tutoriales para Entidades</h2>

                        <div className="tutorial_videos">
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/31-S_g5Clzg?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Crear cuenta y perfil como entidad <br/> en Beunik Pro.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/Aiay4fJNGko?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Recorrido por el Panel de Entidades.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/fF6pN1RVLqA?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Vincular profesionales a tu entidad en el <br/> Panel de Entidades.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/W8AM57O-sBQ?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Crear portafolio de servicios en el <br/> Panel de Entidades.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/sbNEsrpd3Gg?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Configurar la disponibilidad de <br/> horario en el Panel de Entidades.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/OV4HgJOQTGo?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Administrar la agenda y hacer reservas <br/> internas en el Panel de Entidades.</p>
                            </div>

                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/eyPYToiIxVI?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Parámetros de personalización de <br/> agenda en el Panel de Entidades.</p>
                            </div>        
                        </div>
                    </div>

                    <div className="content_videos" id="profesionales">
                        <h2 className="title_tutorials">Tutoriales para profesionales</h2>

                        <div className="tutorial_videos">
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/-GmUEajnu1M?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Crear cuenta y perfil como <br/> profesional en la app de Beunik Pro.</p>
                            </div>
                
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/yJXAAmyzaFg?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Configurar tu horario como <br/> profesional en la app de Beunik Pro.</p>
                            </div>
                
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/f09VDrdkxqQ?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Crear muestras de trabajo en <br/> la app de Beunik Pro.</p>
                            </div>
                
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/qiKlTmVZoqM?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Elige los servicios que prestas como <br/> profesional en la app de Beunik Pro.</p>
                            </div>
                
                            <div className="videos">
                                <iframe width="300" height="200" src="https://www.youtube.com/embed/AW5JrE-Z8rY?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p>Administra tu agenda como <br/> profesional en la app de Beunik Pro</p>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <div className="background_blue">
                        <p className='beunik'>Beunik 2022</p>
                        </div>
                    </footer>
                    
                </section>
            </section>

        )
    }
}

export default Tutorial;

=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './tutorial.css'

class Tutorial extends Component {
  render () {
    return (
      <section className="container_tutorials">
        <div className="navegation_contentTutorial">
          <div>
            <img className="logo_beunikTutorial" src={require('../../img/logo_white.png')} alt="" />
          </div>

          <nav className="content_nav_tutorials">
            <Link to={'/'} className='navLink_tutorial'>
            <i className="bx bx-home-alt-2 navIcon_tutorial"></i> Volver al Home </Link>
          </nav>
        </div>

        <section>
          <div className="contentTitle_tutorial">
            <h1 className="h1_tutorial">Tutoriales BeUnik Pro</h1>
            <div className="links_tutorial">
              <a className="links_anclaTutorial" href="#entidades">Ver para Entidades</a>
              <a className="links_anclaTutorial" href="#profesionales">Ver para Profesinales</a>
            </div>
          </div>

          <div className="content_videos" id="entidades">
            <h2 className="title_tutorials">Tutoriales para Entidades</h2>

            <div className="tutorial_videos">
              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/31-S_g5Clzg?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Crear cuenta y perfil como entidad <br/> en Beunik Pro.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/Aiay4fJNGko?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Recorrido por el Panel de Entidades.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/fF6pN1RVLqA?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Vincular profesionales a tu entidad en el <br/> Panel de Entidades.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/W8AM57O-sBQ?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Crear portafolio de servicios en el <br/> Panel de Entidades.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/sbNEsrpd3Gg?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Configurar la disponibilidad de <br/> horario en el Panel de Entidades.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/OV4HgJOQTGo?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Administrar la agenda y hacer reservas <br/> internas en el Panel de Entidades.</p>
              </div>

              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/eyPYToiIxVI?list=PLJYRyOZdqgRRtQLOQzpMiJ8k4FGXlpSxK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Parámetros de personalización de <br/> agenda en el Panel de Entidades.</p>
              </div>
            </div>
          </div>

          <div className="content_videos" id="profesionales">
            <h2 className="title_tutorials">Tutoriales para profesionales</h2>

              <div className="tutorial_videos">
                <div className="videos">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/-GmUEajnu1M?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p>Crear cuenta y perfil como <br/> profesional en la app de Beunik Pro.</p>
                </div>

                <div className="videos">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/yJXAAmyzaFg?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p>Configurar tu horario como <br/> profesional en la app de Beunik Pro.</p>
                </div>

                 <div className="videos">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/f09VDrdkxqQ?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p>Crear muestras de trabajo en <br/> la app de Beunik Pro.</p>
                </div>

                <div className="videos">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/qiKlTmVZoqM?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p>Elige los servicios que prestas como <br/> profesional en la app de Beunik Pro.</p>
                </div>

                <div className="videos">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/AW5JrE-Z8rY?list=PLJYRyOZdqgRSncLykZ4XGA8yUIt1NeEcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p>Administra tu agenda como <br/> profesional en la app de Beunik Pro</p>
                </div>
              </div>
          </div>

          <footer>
            <div className="background_blue">
              <p className='beunik'>Beunik 2022</p>
            </div>
          </footer>

        </section>
      </section>
    )
  };
}

export default Tutorial
>>>>>>> 3f67a72 (Update v2)
