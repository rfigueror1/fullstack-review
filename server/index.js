const express   =     require('express');
var mongoose    =     require('mongoose');
const db        =     require('./../database/index.js')
const apiReq    =     require('./../helpers/github.js')
var Repo        =     require('../database/index.js');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var userName = req.body.username;
  var url = 'https://api.github.com/users/'+userName;

  apiReq.getReposByUsername(url, (response)=>{
    //results.push(response.owner.login);
    var user = response.data.login;
    var body = Repo.Repo.create({html_url:user});
    res.status(201).send();
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log(req);
  Repo.Repo.find(function (err, repos) {
    if (err) return next(err);
    res.json(repos);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
