import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeContent from "./component/HomeContent";
import LoginContent from "./component/LoginContent";
import AdminContent from "./component/AdminContent";
import AdminUsersContent from "./component/AdminUsersContent";
import Page1Content from "./component/Page1Content";
import Page2Content from "./component/Page2Content";
import PageEvaluationContent from "./component/PageEvaluationContent";
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state = {
      user: null,
      filterNull: (e => e !== null),
      showContent: this.showContent.bind(this)
    }
  }
=======
      super(props);
          this.state = {
            user: null,
            filterNull: (e => e !== null),
            showContent: this.showContent.bind(this)
          }
        }
>>>>>>> dev-Ivan

        setStateApp(state, callback) {
          this.setState(state, callback);
        }

<<<<<<< HEAD
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
=======
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
>>>>>>> dev-Ivan
                }
              }
            }
          }
      }

  componentDidMount() {
<<<<<<< HEAD
    Axios.get('/users/current')
      .then(
        function (res) {
          console.log(res)
          this.setState({ user: res.data })
        }.bind(this)
      )
      .catch(console.log)
    this.showContent("HomeContent");
  }

=======
          Axios.get('/users/current')
            .then(
              function(res) {
                console.log(res)
                this.setState({user: res.data})
              }.bind(this)
            )
            .catch(console.log)
          this.showContent("HomeContent");
      }
>>>>>>> dev-Ivan
  render() {
    return (
      <div className="App">
        <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Header" />
        <main className="scrollbar scrollbar-default">
          <HomeContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="HomeContent" />
          <LoginContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="LoginContent" />
          <AdminContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="AdminContent" />
          <AdminUsersContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="AdminUsersContent" />
          <Page1Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page1Content" />
          <Page2Content stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="Page2Content" />
<<<<<<< HEAD
          <PageEvaluationContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="PageEvaluationContent" nQuestions='25' />
=======
          <PageEvaluationContent stateApp={this.state} setStateApp={this.setStateApp.bind(this)} ref="PageEvaluationContent" nQuestions='25'/>
>>>>>>> dev-Ivan
          <br />
          <Footer stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
