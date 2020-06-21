import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import SingleBlogPost from './SingleBlogPost';
import PaginationLi from '../../components/PaginationLi';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsArray: [],
      numberOfPosts: 0,
      limit: 2,
      singlePost: {},
      pg1: 1,
      pg2: 2,
      pg3: 3,
      pg4: 4,
      pg5: 5
    }
    this.increasePages = this.increasePages.bind(this);
    this.decreasePages = this.decreasePages.bind(this);
    this.handlePageRequest = this.handlePageRequest.bind(this);
  };

  async getBlogPosts(e) {
    let skip = 0;
    const limit = this.state.limit;
    if( e ) {
      skip = Number(e.target.textContent);
    }
    try {
      const res = await axios.get('/getBlogs/' + skip);
      const postsArray = res.data;
      this.setState({
        ...this.state,
        postsArray: postsArray
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

  handlePageRequest(e) {
    console.log(e);
  }

  increasePages() {
    this.setState(prevState => {
      return {
        ...prevState,
        pg1: prevState.pg1 + 5,
        pg2: prevState.pg2 + 5,
        pg3: prevState.pg3 + 5,
        pg4: prevState.pg4 + 5,
        pg5: prevState.pg5 + 5
      }
    })
  }

  decreasePages() {
    this.setState(prevState => {
      return {
        ...prevState,
        pg1: prevState.pg1 - 5,
        pg2: prevState.pg2 - 5,
        pg3: prevState.pg3 - 5,
        pg4: prevState.pg4 - 5,
        pg5: prevState.pg5 - 5
      }
    })
  }

  async checkNumberOfPosts() {
    try {
      const res = await axios.get('/getNumberOfPosts');
      this.setState(prevState => {
        return {
          ...prevState,
          numberOfPosts: res.data.totalPosts
        }
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
    this.checkNumberOfPosts();
  }

  render() {
    const {postsArray, limit:l, numberOfPosts:n, pg1, pg2, pg3, pg4, pg5} = this.state;
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
      <div className="container mb-0">
        <div className="row">
          {postComponents}
        </div>
        <div className="d-flex justify-content-center mt-5 mb--3">
          <nav aria-label="Page navigation">
            <ul className="pagination text-center">
              {(pg1 !== 1) ? <li onClick={this.decreasePages} className="page-item">
                <Span className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Span>
              </li> : null}
              {(((pg1 - 1) * l) < n) ? <PaginationLi fun={this.handlePageRequest} page={pg1} /> : null}
              {(((pg2 - 1) * l) < n) ? <PaginationLi fun={this.handlePageRequest} page={pg2} /> : null}
              {(((pg3 - 1) * l) < n) ? <PaginationLi fun={this.handlePageRequest} page={pg3} /> : null}
              {(((pg4 - 1) * l) < n) ? <PaginationLi fun={this.handlePageRequest} page={pg4} /> : null}
              {(((pg5 - 1) * l) < n) ? <PaginationLi fun={this.handlePageRequest} page={pg5} /> : null}
              
              {(((pg5) * l) < n) ? <li onClick={this.increasePages} className="page-item">
                <Span className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Span>
              </li>: null}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
};

export default Blog;

const Span = Styled.span`
  color: #36b;
  cursor: pointer;
`;
