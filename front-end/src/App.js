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
            <Footer />
            </>
          )} />

          <Route exact={true} path='/blog' render={() => (
            <>
            <Header />
            <Blog />
            <Footer />
            </>
          )} />

          <Route exact={true} path='/contact' render={() => (
            <>
            <Header />
            <Contact />
            <Footer />
            </>
          )} />

          <Route exact={true} path='/compose' render={() => (
            <>
            <Header />
            <Compose />
            <Footer />
            </>
          )} />

          <Route exact path={'/singlePost/'} render={() => (
            <>
            <Header />
            <ShowSinglePost />
            <Footer />
            </>
          )} />

        </div>
      </Router>
    );
  }

}

export default App;
