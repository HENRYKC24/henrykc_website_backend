import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/about/AboutMe';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Compose from './pages/blog/Compose';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    // fetch('/come', {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }

    // })
    // .then((response) => response.json())
    // .then((messages) => {console.log("messages");});
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched..', customers)));
  }

  render() {

    return (
      <Router>
        <div>
          
          <Route exact={true} path='/' render={() => (
            <div>
              <Header />
              <Body />
              <Footer />
            </div>
          )} />

          <Route exact={true} path='/about' render={() => (
            <>
            <Header />
            <About />
            </>
          )} />

          <Route exact={true} path='/blog' render={() => (
            <>
            <Header />
            <Blog />
            </>
          )} />

          <Route exact={true} path='/contact' render={() => (
            <>
            <Header />
            <Contact />
            </>
          )} />

          <Route exact={true} path='/compose' render={() => (
            <>
            <Header />
            <Compose />
            </>
          )} />

        </div>
      </Router>
    );
  }

}

export default App;
