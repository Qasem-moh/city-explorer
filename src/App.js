
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Citys from './components/city'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header >
          <h1>City Explorer </h1>
        </header>

        <Citys />
      </div>
    )
  }
}

export default App