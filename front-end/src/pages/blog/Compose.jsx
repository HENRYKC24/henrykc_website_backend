import React from 'react';
import Footer from '../../components/Footer';
import axios from 'axios';

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      post: '',
      title: '',
      password: '',
      file: '',
      fileName: ''
    };
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handlePasswordInput(e) {
    const {value} = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        password: value
      }
    })
  }

  handleTitle(e) {
    const {value} = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        title: value
      }
    })
  }

  handleFile(e) {
    const file = e.target.files[0];
    this.setState(prevState => {
      return {
        ...prevState,
        file: file,
        fileName: file.name
      }
    })
  }

  handlePost(e) {
    const {value} = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        post: value
      }
    })
  }

  async onSubmit(e) {
    e.preventDefault();
    const {file} = this.state;
    const formData = new FormData();
    formData.append('data', file);
    const response = await axios.post('/upload', formData, {
      headers: {"Content-Type": "multipart/form-data"}
    });
    console.log(response);
    // const serverResponse = response.data;
  }

  async handleClick() {
    const password = this.state.password;
    const neededData = (password);
    const response = await axios.post('admin/', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: neededData
    });

    const returnedData = response.data;
    
    this.setState(prevState => {
      return {
        ...this.state,
        loggedIn: returnedData
      }
    })
  }

  render() {
    return (
      this.state.loggedIn 
      ?
      <div>
      <div className="container">
        <h1>Compose a blog post</h1>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              onChange={this.handleTitle} 
              value={this.state.title} 
              type="text" 
              name="title" 
              className="form-control" 
              id="title" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Upload file</label>
            <input 
              onChange={this.handleFile} 
              type="file" 
              name="file" 
              className="form-control" 
              id="file" 
            />
          </div>
           
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea 
              onChange={this.handlePost} 
              value={this.state.post} 
              className="form-control" 
              name="post" 
              id="post" 
              rows="8" 
            />
          </div>
              
              
          <button type="submit" name="submit" className="btn btn-primary">Publish</button>
        </form>
      </div> 
        <Footer />
        </div>
      : 
      <><div className="container col-lg-4 text-center">
       <form method="POST" action="/admin-compose-credential" className="form-signin">
       <img className="mb-4" src="images/preWed.png" alt="for log in" width="72" height="72" />
       <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
       <label htmlFor="inputEmail" className="sr-only">Email address</label>
       <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
       <label htmlFor="inputPassword" name="password" className="sr-only">Password</label>
       <input 
        type="password" 
        name="password" 
        onChange={this.handlePasswordInput} 
        value={this.state.password}
        id="inputPassword" 
        className="form-control" 
        placeholder="Password" 
        required
      />
       
       <button className="btn btn-lg btn-primary btn-block" onClick={this.handleClick} type="button">Sign in</button>
     </form>
      </div>
      <Footer />
      </>
    )
  }
};

export default Compose;
