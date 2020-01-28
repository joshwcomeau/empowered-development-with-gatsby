import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import syntaxTheme from './syntax-theme';

const GUTTER = 30;

const AdditionalCodeStyles = createGlobalStyle`
  .token-line, textarea {
    font-size: 24px !important;
    line-height: 32px !important;
  }

    /*
    HACK:
    I want to apply some styles to the 'Slide' component provided by MDX Deck.
    Unfortunately, I can't find a smooth way to do this, so I'm tracing it
    based on the DOM structure.
  */
 #___gatsby > div > div > div > div {
    height: auto !important;
    min-height: 100vh !important;
    overflow: auto !important;
    padding: 60px !important;
  }
`;

const CodeSnippet = ({ code }) => {
  return (
    <>
      <LiveProvider
        noInline={true}
        code={code.trim()}
        mountStylesheet={false}
        theme={syntaxTheme}
        
      >
        <StaticWrapper>
          <Col>
            <LiveEditor />
          </Col>
        </StaticWrapper>
      </LiveProvider>

      <AdditionalCodeStyles />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StaticWrapper = styled.div`
  min-width: 600px;
`;

// Live snippets feature two siblings, so we should have it be extra wide.
const LiveWrapper = styled(Wrapper)`
  width: 95vw;
`;

const Col = styled.div`
  position: relative;
  flex: 1;

  ${LiveWrapper} & {
    width: 50%;
  }

  @media (max-width: 800px) {
    ${LiveWrapper} & {
      width: 100%;
      padding-bottom: 30px;
    }
  }
`;

const PreviewCol = styled(Col)`
  font-size: 24px;
  padding-left: ${GUTTER}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickToReveal = styled.button`
  position: absolute;
  top: 0;
  left: ${GUTTER}px;
  right: 0;
  bottom: 0;
  width: calc(100% - ${GUTTER}px);
  z-index: 100;
  border: none;
  background: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: ${GUTTER}px;
  font-size: 22px;
  font-weight: bold;
  color: #999;
`;

const Error = styled(LiveError)`
  display: block;
  font-size: 18px;
`;

export default CodeSnippet;
