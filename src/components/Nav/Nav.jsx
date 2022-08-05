<<<<<<< HEAD
import React, { Component }  from "react";
import './nav.css';
import logo_white from '../../img/logo_white.svg';

class Nav extends Component {
    constructor (props) {
        super(props);

        this.state = {
            navBackground: false,
            hamburguer: "",
            navegation: "",
            closeNav: ""
        }
    }

    scrollEventHandler= () => {
        if(window.scrollY > 90) {
            this.setState({
                navBackground: true
            })
        }else {
            this.setState({
                navBackground: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollEventHandler)
    }

    hamburguerClick = () => {
        this.setState({
          hamburguer: this.state.hamburguer === "" ? "is-active" : "",
          navegation: this.state.navegation === "" ? "nav_active" : "",
          closeNav: this.state.clickNav === "" ? "" : ""
        })
      }


    render () {
        const styleNav = this.state.navBackground ? { backgroundColor: "rgba(60,123,213,255)" } : { backgroundColor: "" };
        return (
          <div className="container_nav">

            <div className="contenedor_hamburger">
              <button className={`hamburger ${this.state.hamburguer}`} onClick={this.hamburguerClick}>
                <div className="bar"></div>
              </button>
            </div>

            <div
              className={`navegation ${this.state.navegation }`} 
              style={styleNav}           >
              <a href="#home">
                <div>
                  <img className="logo" src={logo_white} alt="" />
                </div>
              </a>

              <nav className="nav_content">
                <a className={`nav_links ${this.state.closeNav}`} href="#home">
                  <i className="bx bx-home-alt-2 icon_nav"></i> home
                </a>
                <a className={`nav_links ${this.state.closeNav}`} href="#feature" onClick={this.hamburguerClick}>
                  <i className="bx bx-rocket icon_nav"></i> Características
                </a>
                <a className={`nav_links ${this.state.closeNav}`} href="#guide" onClick={this.hamburguerClick}>
                  <i className="bx bx-flag icon_nav"></i> guías
                </a>
                <a className={`nav_links ${this.state.closeNav}`} href="#fee" onClick={this.hamburguerClick}>
                  <i className="bx bx-star icon_nav"></i> tarifas
                </a>
                <a className={`nav_links ${this.state.closeNav}`} href="#contact" onClick={this.hamburguerClick}>
                  <i className="bx bx-envelope icon_nav"></i> Contacto
                </a>
                
              </nav>
            </div>
          </div>

        );
    }
}

export default Nav;
=======
import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navBackground: false,
      hamburguer: '',
      navegation: '',
      closeNav: ''
    }
  }

  scrollEventHandler = () => {
    if (window.scrollY > 90) {
      this.setState({
        navBackground: true
      })
    } else {
      this.setState({
        navBackground: false
      })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.scrollEventHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollEventHandler)
  }

  hamburguerClick = () => {
    this.setState({
      hamburguer: this.state.hamburguer === '' ? 'is-active' : '',
      navegation: this.state.navegation === '' ? 'nav_active' : '',
      closeNav: this.state.clickNav === '' ? '' : ''
    })
  }

  render () {
    const styleNav = this.state.navBackground ? { backgroundColor: 'rgba(60,123,213,255)' } : { backgroundColor: '' }
    return (
      <div className="container_nav">

        <div className="contenedor_hamburger">
          <button className={`hamburger ${this.state.hamburguer}`} onClick={this.hamburguerClick}>
            <div className="bar"></div>
          </button>
        </div>

        <div
          className={`navegation ${this.state.navegation}`}
          style={styleNav}>
          <a href="#home">
            <div>
              <img className="logo" src={require('../../img/logo_white.png')} alt="" />
            </div>
          </a>

          <nav className="nav_content">
            <a className={`nav_links ${this.state.closeNav}`} href="#home">
              <i className="bx bx-home-alt-2 icon_nav"></i> home
            </a>
            <a className={`nav_links ${this.state.closeNav}`} href="#feature" onClick={this.hamburguerClick}>
              <i className="bx bx-rocket icon_nav"></i> Características
            </a>
            <a className={`nav_links ${this.state.closeNav}`} href="#guide" onClick={this.hamburguerClick}>
              <i className="bx bx-flag icon_nav"></i> guías
            </a>
            <a className={`nav_links ${this.state.closeNav}`} href="#fee" onClick={this.hamburguerClick}>
              <i className="bx bx-star icon_nav"></i> tarifas
            </a>
            <a className={`nav_links ${this.state.closeNav}`} href="#contact" onClick={this.hamburguerClick}>
              <i className="bx bx-envelope icon_nav"></i> Contacto
            </a>
          </nav>

        </div>
      </div>
    )
  }
}

export default Nav
>>>>>>> 3f67a72 (Update v2)
