import React from 'react';
import styled from 'styled-components'

function ShowSinglePost() {
  const {title, post, img, time} = JSON.parse(localStorage.getItem('data'));
  localStorage.clear();
  return(
    <div className="container">
      <div className="">
        <h1>{title}</h1>
        <p>{time}</p>
        <hr />
        <div>

        <ImgStyle src={'/images/' + img} alt={img} />
        </div>
        <p>{post}</p>
      </div>
    </div>
  )
}

export default ShowSinglePost;
const ImgStyle = styled.img`
  width: 50%;
  height: 20%;
`;
