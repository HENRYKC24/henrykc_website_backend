import React from 'react';
import styled from 'styled-components';

function SingleBlogPost(props) {
  const {title, img, time, post, id} = props;
  let shortPost;
  if (post.length > 100) {
    shortPost = post.substring(0, 50) + '...';
  } else {
    shortPost = post;
  }
  return (
    <div className='col-lg-4 col-md-4 col-sm-6 mt-5'>
      <h3>{title}</h3>
      <div>
        <ImgStyle src={`/uploads/${img}`} alt={img} />
      </div>
      <p>{time}</p>
      <div>
        <p>{shortPost}</p>
      </div>
      {post.length > 100 ? <button className="btn btn-primary">Read More</button> : null}
    </div>
  )
  
}

export default SingleBlogPost;

const ImgStyle = styled.img`
  width: 100%;
`;
