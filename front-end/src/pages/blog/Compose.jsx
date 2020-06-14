import React from 'react';
import Footer from '../../components/Footer';

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: 0
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      this.state.loggedIn 
      ?
      <div>
      <div className="container">
        <form action="/compose" method="POST">

          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" id="title" />
          </div>

          <div class="form-group">
            <label for="title">Upload file</label>
            <input type="file" name="file" class="form-control" id="file" />
          </div>
              
          <div class="form-group">
            <label for="post">Post</label>
            <textarea class="form-control" name="post" id="post" rows="8" />
          </div>
              
              
          <button type="submit" name="submit" class="btn btn-primary">Publish</button>
        </form>
      </div> 
        <Footer />
        </div>
      : 
      <><div className="container col-lg-4 text-center">
       <form method="POST" action="/admin-compose-credential" class="form-signin">
       <img class="mb-4" src="images/preWed.png" alt="for log in" width="72" height="72" />
       <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
       <label for="inputEmail" class="sr-only">Email address</label>
       <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
       <label for="inputPassword" name="password" class="sr-only">Password</label>
       <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
       
       <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
     </form>
      </div>
      <Footer />
      </>
    )
  }
};

export default Compose;
