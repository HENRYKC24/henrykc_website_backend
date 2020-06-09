import React, {Component} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css'

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
      <div>
        
        <Nav />
        <Footer />
      </div>
    );
  }

}

export default App;
