import React, { Component } from 'react';
import './App.css';
import Ship from './components/Ship'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palete: []
    }
    this.getcolors();
  }
  getcolors() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const mycolors = json.palettes;
        this.setState({
          palete: mycolors
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Ship shipcolors={this.state.palete} />
      </div>
    );
  }
}

export default App;
