import React from 'react';
import styled from 'styled-components';

const ENABLE_NOTES = false;

const SpeakerNote = ({ children }) => {
  if (!ENABLE_NOTES) {
    return null;
  }

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0deg, 0%, 95%, 0.8);
  font-size: 16px;
  white-space: pre-wrap;
  padding: 50px;
  text-align: center;
`

export default SpeakerNote;