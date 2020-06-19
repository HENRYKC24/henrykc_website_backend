import React from 'react';
import axios from 'axios';
import SingleBlogPost from './SingleBlogPost';

class Blog extends React.Component {
  constructor() {
    super()
    this.state = {
      postsArray: []
    }
  };

  async getBlogPosts() {
    try {
      const res = await axios.get('/getBlogs');
      const postsArray = res.data;
      console.log(postsArray);
      this.setState({
        postsArray: (postsArray)
      });
    } catch(err) {
      console.log(err);
    }
  }

  componentDidMount() {
    document.title = 'Blog-Henry KC';
    this.getBlogPosts();
  }

  render() {
    const {postsArray} = this.state;
    console.log(postsArray);
    const postComponents = postsArray.map(
      post => <SingleBlogPost 
        title={post.title} 
        img={post.image} 
        post={post.post} 
        time={post.time} 
      />
    );
    return (
      <div className="container">
        {postComponents}
      </div>
    )
  }
};

export default Blog;
