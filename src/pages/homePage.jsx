import React, { Component }  from "react";
import Features from "../components/Features/Features";
import Fee from "../components/Fee/Fee";
import Roadmap from "../components/Roadmap/Roadmap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

class HomePage extends Component {
    render() {
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
                    <Features
                    image="feature_1"
                    title="Visiblidad"
                    check="check"
                    feature_1="Exhibe tu negocio creando un perfil con toda la información."
                    feature_2="Crea muestras de trabajo y todos los servicios que ofreces."
                    feature_3="Alcanza la mejor reputación a través de reseñas positivas."
                    />
                    <Features
                    image="feature_2"
                    title="Maneja tus reserva"
                    check="check"
                    feature_1="Administra tus reservas en tiempo real."
                    feature_2="Crea una agenda personalizada de acuerdo a tus tiempos."
                    feature_3="Identifica los servicios y días más solicitados."
                    />
                    <Features
                    image="feature_3"
                    title="Sé un gran líder"
                    check="check"
                    feature_1="Arma tu equipo de profesionales."
                    feature_2="Visualiza el flujo de trabajo de tus profesionales."
                    feature_3="Identifica cuales son los profesionales más reconocidos."
                    />
                    <Features
                    image="feature_4"
                    title="Datos que te ayudan a crecer"
                    check="check"
                    feature_1="Descubre tus puntos fuertes para potenciarlos."
                    feature_2="Identifica áreas de mejora."
                    feature_3="Ten el control y toma las mejores decisiones."
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

                <Fee />
            </main>

            <Footer />

            </div>
            
        )
    }
}

export default HomePage;