require('isomorphic-fetch');

function fetchTweets() {
  const manualTHing = "eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJnNmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw==";

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
  }).then(res => res.json())
  .then(json => {
    const {token_type, access_token} = json;

    return fetch('https://api.twitter.com/1.1/tweets/search/30day/dev.json', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        query: 'cats',
        maxResults: 10,
      })
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