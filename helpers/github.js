const request =   require('request');
const config =    require('../config.js');
const axios =     require('axios');

let getReposByUsername = (url, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log(typeof url);
  url = url.toString();

  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  console.log(url, 'url searched at gh');
  axios.get(url, options)
    .then((response) => {
      console.log(response);
      callback(response);
    })
    .catch((error) =>{
      console.log(error);
    });
}

module.exports.getReposByUsername = getReposByUsername;

//getReposByUsername("https://api.github.com/users/rfigueror1", (res) => {console.log(res.data.id)});
