import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import Layout from './component/Layout';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';


import  Page1Content from './pages/Page1Content'



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
      <BrowserRouter>
        <div className="App">
          <div>
            <Header stateApp={this.state} setStateApp={this.setStateApp.bind(this)} />
            <Route path="/Page1Content" render={()=> <div><Page1Content /> <Layout /></div>  }/>
            <Route path="/Page2Content" render={()=> <div><h4> HOLA</h4></div>  }/>
          </div>
          <AboutUs/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
