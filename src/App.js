import React, { Component } from 'react'
import './App.css'

import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Title />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App
