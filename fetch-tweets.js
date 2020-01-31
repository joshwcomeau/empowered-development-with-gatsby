require('isomorphic-fetch');

function fetchTweets() {
  const key = 'ijSQWZi4FeFsWYisuwrovuZQu';
  const secret = 'eYBa4Ud9hMrq4pMOlt3rivXNaD65qkgvHdPUsUaAkvjA5TzzpH';

  let buff = new Buffer(`${key}:${secret}`);
  let base64data = buff.toString('base64');

  const authApiEndpoint = `https://api.twitter.com/oauth2/token`;

  fetch(authApiEndpoint, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Basic ${base64data}`
    },
    body: 'grant_type=client_credentials',
  })
    .then(res => res.json())
    .then(json => {
      const {access_token} = json;

      const HASHTAG = '%23GatsbyDaysPets';

      return fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${HASHTAG}`, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        },
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log('got data', json)
    })
    .catch(err => {
      console.error(err);
    })
}

fetchTweets()

module.exports = fetchTweets;