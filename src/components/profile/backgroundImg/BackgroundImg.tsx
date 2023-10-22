import React from 'react';
import styled from "styled-components";

const BackgroundImg = () => {
    return (
        <StyledBg>
            <img
                src="https://rukminim2.flixcart.com/image/850/1000/poster/3/x/p/end-of-world-paper-poster-12-x18-with-4-acrylic-sticker-free-original-imaej3phxmrfz67q.jpeg?q=90"
                alt=""/>
        </StyledBg>
    );
};

export default BackgroundImg;

const StyledBg = styled.div`
  
  padding: 15px;

  img {
    width: 950px;
    height: 300px;
    display: block;
    margin: 0 auto;
  }
`