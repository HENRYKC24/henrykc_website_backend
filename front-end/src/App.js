import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProfilePic from './pages/home/ProfilePic';
import WithPoorChildren from './pages/home/WithPoorChildren';
import Title from './components/Title';
import Section1 from './components/Section1';
import IntroPics from './components/IntroPics';
import './App.css'
import UdemyCert from './pages/home/UdemyCert';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }
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
              <Title />
              <Nav />
              <IntroPics />
              <ProfilePic />
              <WithPoorChildren />
              <UdemyCert />
              <Section1 />
              <Footer />
            </div>
          )} />
          <Route exact={true} path='/about' render={() => (
            <><Nav />
            <h1>This is the about page</h1></>
          )} />
        </div>
      </Router>
    );
  }

}

export default App;
