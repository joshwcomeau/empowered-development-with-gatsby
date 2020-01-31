import React from 'react';
import styled from 'styled-components';
import TweetEmbed from 'react-tweet-embed';


const CatTweets = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    fetch('/.netlify/functions/cat-tweets')
      .then(res => res.text())
      .then(rawData => {
        setData(rawData.split(';'))
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [])

  return (
    <Wrapper>
      {loading && "Loading..."}
      {data && data.map(tweetId => {
        return (
          <TweetEmbed
            key={tweetId}
            id={tweetId}
          />
        )
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
`;

export default CatTweets;
