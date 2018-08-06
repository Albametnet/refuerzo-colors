import React, { Component } from 'react';
import './App.css';
import Ship from './components/Ship';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      palete :  []
    }
    
  }
  getcolors() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json'
    )
      .then(function (response) {
        return response.json();
      })
      .then( (json) => {
        const mycolors = json.skills;
        this.setState({
          palete: mycolors
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Ship colors={this.state.palete.map (item=> {
          return (
            <div>
              {item}
            </div>
          )
        })}/>
      </div>
    );
  }
}

export default App;
