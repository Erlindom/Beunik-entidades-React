import React, { Component } from 'react'
import Feature from '../components/Feature/Feature'
import Fee from '../components/Fee/Fee'
import Roadmap from '../components/Roadmap/Roadmap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

class HomePage extends Component {
  render () {
    // Feature Section
    const visilityPoints = [
      'Exhibe tu negocio creando un perfil con toda la información.',
      'Crea muestras de trabajo y todos los servicios que ofreces.',
      'Alcanza la mejor reputación a través de reseñas positivas.'
    ]

    const drivePoints = [
      'Administra tus reservas en tiempo real.',
      'Crea una agenda personalizada de acuerdo a tus tiempos.',
      'Identifica los servicios y días más solicitados.'
    ]

    const leaderPoints = [
      'Arma tu equipo de profesionales.',
      'Visualiza el flujo de trabajo de tus profesionales.',
      'Identifica cuales son los profesionales más reconocidos.'
    ]

    const growthPoints = [
      'Descubre tus puntos fuertes para potenciarlos.',
      'Identifica áreas de mejora.',
      'Ten el control y toma las mejores decisiones.'
    ]

    // Fee Section
    const fees = [
      'Creación de perfil con imagen de entidad y logo.',
      'Agregar profesionales de forma ilimitada.',
      'Agregar servicios de forma ilimitada.',
      'Agregar muestras de trabajo de forma ilimitada.',
      'Dashboard de analítica.',
      'Agregar agendas manuales y automáticas ilimitadas.'
    ]

    return (
      <div>
        <Nav />
        <Header />
        <main className="container">

          <section id="feature">
            <h2 className="title_feature">Características</h2>
            <p className="info_feature">
              Conoce todas las funcionalidades que tiene BeUnik PRO para
              ayudarte a crecer y mejorar la experiencia de tus clientes.
            </p>

            <div className="features_content">
              <Feature
                image="feature_1"
                title="Visiblidad"
                featurePoints={visilityPoints}
              />

              <Feature
                image="feature_2"
                title="Maneja tus reserva"
                featurePoints={drivePoints}
              />

              <Feature
                image="feature_3"
                title="Sé un gran líder"
                featurePoints={leaderPoints}
              />

              <Feature
                image="feature_4"
                title="Datos que te ayudan a crecer"
                featurePoints={growthPoints}
              />
            </div>
          </section>

          <section className="roadmap_section" id="guide">
            <Roadmap
              title="Guía para crear el perfil como entidad"
              image="roadmap"
            />

            <Roadmap
              title="Guía para crear el perfil como profesional"
             image="roadmap2"
            />
          </section>

          <Fee
            fees={fees}
          />

        </main>
        <Footer />

      </div>
    )
  }
}

export default HomePage
