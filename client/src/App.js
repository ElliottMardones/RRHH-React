import React, { Component } from 'react';
import Header from './component/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      session: null,
      filterNull: (e => e !== null)
    }
    */
    this.state = {
      session: { type: 'admin' },
      filterNull: (e => e !== null)
    }
  }

  setStateApp(state, callback) {
    this.setState(state, callback);
  }

  render() {
    return (
      <div className="App">
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
        <main className="scrollbar scrollbar-default">
        
        </main>
      </div>
    );
  }
}

export default App;
