import React from 'react';

class Blog extends React.Component {
  componentDidMount() {
    document.title = 'Blog - KC';
  }
  render() {
    return (
      <div className="container">
        <p>This is my blog</p>
        
      </div>
    )
  }
};

export default Blog;