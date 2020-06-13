import React from 'react';
const bodyParser = require('body-parser');

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      this.state.loggedIn ? <div className="container">
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
      </div> : <div>please log in</div>
    )
  }
};

export default Compose;
