import React, { Component } from 'react'
import './App.css'
import './NavSite.js'
import NavSite from './NavSite.js'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavSite />
        <h1 className="App-title">Welcome brad</h1>

        <h2 className="App-intro">
          About Me
            </h2>
        <section>
          <p>I moved all over the country since my dad was in the Air Force.
          I have lived in England.
          I wrestled all four years in highschool.
              My Dj name is Dj BOP It.</p>
        </section>
        <section>
          <h2>why helio</h2>
          <ul>
            <li>New Career</li>
            <li>Love working with technology</li>
            <li>Affordable</li>
          </ul>
        </section>
        <section>
          <h2>hobbies</h2>
          <ul>
            <li>Edm</li>
            <li>Music Producer</li>
            <li>Cars</li>
          </ul>
        </section>
      </div>
    )
  }
}

