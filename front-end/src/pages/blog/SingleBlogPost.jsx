import React from 'react';
import styled from 'styled-components';

function SingleBlogPost(props) {
  const {title, img, time, post} = props;
  return (
    <div className='col-lg-6 col-md-6'>
      <h3>{title}</h3>
      <div className='row col-lg-6 col-md-6'>
        <ImgStyle src={`/uploads/${img}`} alt={img} />
      </div>
      <p>{time}</p>
      <div>
        <p>{post}</p>
      </div>
    </div>
  )
}

export default SingleBlogPost;

const ImgStyle = styled.img`
  width: 300px;
`;
