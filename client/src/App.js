import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/about/AboutMe';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Compose from './pages/blog/Compose';
import ShowSinglePost from './pages/blog/ShowSinglePost';
import './App.css';

class App extends Component {
  
  render(params) {
    return (
      <Router>
        <div>
          <Header />
          
          <Route exact={true} path='/' render={() => (
            <div>
              <Body />
            </div>
          )} />

          <Route exact={true} path='/about' render={() => (
            <>
            <About />
            </>
          )} />

          <Route exact={true} path='/blog' render={() => (
            <>
            <Blog />
            </>
          )} />

          <Route exact={true} path='/contact' render={() => (
            <>
            <Contact />
            </>
          )} />

          <Route exact={true} path='/compose' render={() => (
            <>
            <Compose />
            </>
          )} />

          <Route exact path={'/singlePost/'} render={() => (
            <>
            <ShowSinglePost />
            </>
          )} />

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
