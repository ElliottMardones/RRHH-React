import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeContent from "./component/HomeContent";
import LoginContent from "./component/LoginContent";
<<<<<<< HEAD
import AdminContent from "./component/AdminContent";
import AdminUsersContent from "./component/AdminUsersContent";
import Page1Content from "./component/Page1Content";
import Page2Content from "./component/Page2Content";
=======
import Page1Content from "./component/Page1Content";
import Page2Content from "./component/Page2Content";
import PageEvaluationContent from "./component/PageEvaluationContent";
>>>>>>> dev-Ivan
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
<<<<<<< HEAD
          this.refs.Header.setState(
            {
              selectedNavWidget: content
            }
          );
=======
>>>>>>> dev-Ivan
          if (key === content) {
            ref.setState(
              {
                isVisible: true
              },
<<<<<<< HEAD
              () => {
=======
              ()=>{
>>>>>>> dev-Ivan
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
<<<<<<< HEAD
              () => {
=======
              ()=>{
>>>>>>> dev-Ivan
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
<<<<<<< HEAD
    this.showContent("HomeContent");
=======
    this.showContent("HomeContent")
>>>>>>> dev-Ivan
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Header" />
        <main className="scrollbar scrollbar-default">
          <HomeContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="HomeContent" />
          <LoginContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="LoginContent" />
          <AdminContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="AdminContent" />
          <AdminUsersContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="AdminUsersContent" />
          <Page1Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page1Content" />
          <Page2Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page2Content" />
          <br />
=======
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />

        <main className="scrollbar scrollbar-default">
          <HomeContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="HomeContent" />
          <LoginContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="LoginContent" />
          <Page1Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page1Content" />
          <Page2Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page2Content" />
          <PageEvaluationContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="PageEvaluationContent" nQuestions='25'/>
>>>>>>> dev-Ivan
          <Footer stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
