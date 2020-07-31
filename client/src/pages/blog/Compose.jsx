import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      post: '',
      title: '',
      password: '',
      file: '',
      fileName: '',
      loggedInErr: false,
      uploadStatus: '',
      uploadedImage: '',
      previewFile: ''
    };
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Compose Blog - Henry KC'
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
        title: value,
        uploadStatus: ''
      }
    })
  }

  handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState(prevState => {
        console.log(reader.result);
        return {
          ...prevState,
          previewFile: reader.result,
          file: reader.result
        }
      })
    }
  }

  previewImage(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState(prevState => {
        console.log(reader.result);
        return {
          ...prevState,
          previewFile: reader.result,
          file: reader.result
        }
      })
    }
  }

  handlePost(e) {
    const {value} = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        post: value,
        uploadStatus: ''
      }
    })
  }

  async onSubmit(e) {
    e.preventDefault();
    const {post, title, file} = this.state;
    if( !post || !title || !file ) {
      this.setState({
        ...this.state,
        uploadStatus: 'No empty input(s)'
      });
      return;
    }
    const [type, extension] = this.state.file.substr(5, 10).split('/');
    console.log(type, extension);
    const wantedTypes = ['jpeg', 'gif;', 'png;', 'webp'];
    if( type !== 'image' || !wantedTypes.includes(extension) ) {
      this.setState({
        ...this.state,
        uploadStatus: 'Only jpeg, gif, png and webp images are allowed'
      });
      return;
    }
    // const formData = new FormData();
    // formData.append('file', this.state.file);
    // formData.append('info', JSON.stringify({title, post}))

    const formData = {
      file: this.state.previewFile,
      info: JSON.stringify({title, post})
    }

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const {msg, filePath} = (response.data);
      this.setState(prevState => {
        return {
          ...prevState,
          uploadStatus: msg,
          uploadedImage: filePath
        }
      })
    } catch( err ) {
      console.log(err);
    }
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
        ...prevState,
        loggedIn: returnedData,
        loggedInErr: !returnedData
      }
    })
  }

  render() {
    return (
      this.state.loggedIn 
      ?
      <div>
      <div className="container">
        <h1>Compose blog post:</h1>
        <span style={{color: this.state.uploadStatus[0] === 'F' ? '#060' : '#a00'}}>{this.state.uploadStatus}</span>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              onChange={this.handleTitle} 
              onFocus={this.handleTitle} 
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
          {this.state.previewFile && <img src={this.state.previewFile} height={100} width={130} alt="Now img"/>}
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea 
              onFocus={this.handlePost}
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
        <div className="row">

        
        </div>
      </div> 
        </div>
      : 
      <><div className="container col-lg-4 col-md-6 col-sm-6 text-center pt-3">
        <ErroH4>{this.state.loggedInErr ? 'Wrong email or password' : null}</ErroH4>
       <form method="POST" action="/admin-compose-credential" className="form-signin mt-5">
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
        className="form-control mt-3" 
        placeholder="Password" 
        required
      />
       
       <button className="btn btn-lg btn-primary btn-block mt-3 mb-5" onClick={this.handleClick} type="button">Sign in</button>
     </form>
      </div>
      </>
    )
  }
};

export default Compose;

const ErroH4 = styled.h4`
 color: #a00;
`;
