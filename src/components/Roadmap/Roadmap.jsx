import React, { Component } from 'react'
import './roadmap.css'

class Roadmap extends Component {
  render () {
    return (
      <main className="container">

        <section className='roadmap_section' id='guide'>
          <div>
            <h2 className="title_roadmap">{this.props.title}</h2>
            <img
            className="img_roadmap"
            src={require(`../../img/${this.props.image}.jpg`)} alt="" />
          </div>
        </section>

      </main>
    )
  }
}

export default Roadmap
