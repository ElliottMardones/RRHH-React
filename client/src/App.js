import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeContent from "./component/HomeContent";
import LoginContent from "./component/LoginContent";
import AdminContent from "./component/AdminContent";
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
          this.refs.Header.setState(
            {
              selectedNavWidget: content
            }
          );
          if (key === content) {
            ref.setState(
              {
                isVisible: true
              },
              () => {
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
              () => {
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
    this.showContent("HomeContent");
  }

  render() {
    return (
      <div className="App">
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Header" />
        <main className="scrollbar scrollbar-default">
          <HomeContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="HomeContent" />
          <LoginContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="LoginContent" />
          <AdminContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="AdminContent" />
          <Page1Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page1Content" />
          <Page2Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page2Content" />
          <br />
          <Footer stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
