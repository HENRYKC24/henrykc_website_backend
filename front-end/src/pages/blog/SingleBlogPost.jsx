import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Blog from './Blog';

function SingleBlogPost(props) {
  const [postId, setPostId] = useState(false);
  const {title, img, time, post, id1} = props;
  
  let shortPost;
  if (post.length > 100) {
    shortPost = post.substring(0, 50) + '...';
  } else {
    shortPost = post;
  }

  const runNow = () => {
    console.log(383);
    localStorage.setItem('data', JSON.stringify(props));
    return <Redirect to='/singlePost' />
  }

  return (
    <div className='col-lg-4 col-md-4 col-sm-6 mt-5'>
      <h3>{title}</h3>
      <div>
        <ImgStyle src={`/uploaded-image-15926522302992019-12-30 05.47.02`} alt={img} />
      </div>
      <p>{time}</p>
      <div>
        <p>{shortPost}</p>
      </div>
      {post.length > 100 ? <button onClick={() => {
        setPostId(id1);
      }} className="btn btn-primary">Read More</button> : null}
      {postId ? runNow() : null}
    </div>
  )
  
}

export default SingleBlogPost;

const ImgStyle = styled.img`
  width: 100%;
  height: 200px;
`;
