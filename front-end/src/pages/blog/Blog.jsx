import React from 'react';
import axios from 'axios';
import SingleBlogPost from './SingleBlogPost';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsArray: [],
      singlePost: {}
    }
  };

  async getBlogPosts() {
    try {
      const res = await axios.get('/getBlogs');
      const postsArray = res.data;
      this.setState({
        ...this.state,
        postsArray: postsArray.reverse()
      });
    } catch(err) {
      console.log(err);
    }
  }
  
  async displaySinglePost(id) {
    try {
      const res = await axios.get('/showSingle/' + id);
      const singlePost = res.data;
      this.setState({
        postsArray: [singlePost]
      });
    } catch(err) {
      console.log(err);
    }
  }
  
  componentDidMount() {
    document.title = 'Blog-Henry KC';
    if (this.props.id) {
      this.displaySinglePost(this.props.id);
    } else {
      this.getBlogPosts();
    }
  }

  render() {
    const {postsArray} = this.state;
    const postComponents = postsArray.map(
      (post, index) => <SingleBlogPost 
        key={index}
        title={post.title} 
        img={post.image} 
        post={post.post} 
        time={post.time} 
        id1={post._id}
      />
    );
    return (
      <div className="container">
        <div className="row">
          {postComponents}
        </div>
      </div>
    )
  }
};

export default Blog;
