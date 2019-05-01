import React, { Component } from 'react';
import Header from './component/Header';
import HomeContent from "./component/HomeContent";
import LoginContent from "./component/LoginContent";
import Page1Content from "./component/Page1Content";
import Page2Content from "./component/Page2Content";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      session: null,
      filterNull: (e => e !== null),
      showContent: this.showContent.bind(this)
    }
    */
    this.state = {
      session: {
        type: 'admin',
        name: 'Alan Brito'
      },
      filterNull: (e => e !== null),
      showContent: this.showContent.bind(this)
    }
  }

  setStateApp(state, callback) {
    this.setState(state, callback);
  }

  showContent(content) {
    for (const key in this.refs) {
      if (this.refs.hasOwnProperty(key)) {
        const ref = this.refs[key];
        if (ref.state.hasOwnProperty('isVisible')) {
          if (key === content) {
            ref.setState(
              {
                isVisible: true
              },
              ()=>{
                if (ref.onEntry) {
                  ref.onEntry();
                }
              }
            );
          } else {
            ref.setState(
              {
                isVisible: false
              },
              ()=>{
                if (ref.onLeave) {
                  ref.onLeave();
                }
              }
            );
          }
        }
      }
    }
  }

  componentDidMount() {
    this.showContent("HomeContent")
  }

  render() {
    return (
      <div className="App">
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
        <main className="scrollbar scrollbar-default">
          <HomeContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="HomeContent" />
          <LoginContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="LoginContent" />
          <Page1Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page1Content" />
          <Page2Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page2Content" />
        </main>
      </div>
    );
  }
}

export default App;
