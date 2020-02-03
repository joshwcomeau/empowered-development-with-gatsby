import React from 'react';
import styled from "styled-components";

import CodeSnippet from './CodeSnippet';

const Table = styled.table`
  max-width: 60%;

  td,
  th {
    text-align: center;
  }
`;

const Big = styled.span`
  font-size: 3em;
`;
const Small = styled.span`
  font-size: 2rem;
  margin-top: 2rem;
`;

const P = styled.p`
  width: 70vw;
  max-width: 800px;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 72px;
`

const Wrapper = styled.div`

  & > div {
    overflow-y: auto !important;
    overflow-x: hidden !important;
  }
`

const Provider = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default {
  components: {
    table: Table,
    Big: Big,
    Small: Small,
    h1: H1,
    p: P,
    CodeSnippet,
  },
  Provider
};
