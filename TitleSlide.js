import React from 'react';
import styled, {keyframes} from 'styled-components';

import spaceVid from './assets/space.mp4';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const TitleSlide = () => {
  return <Wrapper>
    <Video muted loop autoPlay src={spaceVid} />
    <Title>Empowered Development with Gatsby</Title>
  </Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  object-fit: cover;
  animation: ${fadeIn} 2000ms 250ms ease-out both;
`

const Title = styled.h1`
  color: white;
  position: absolute;
  z-index: 2;
  top: 10vh;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`

export default TitleSlide;