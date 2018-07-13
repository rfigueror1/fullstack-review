const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://localhost/fetcher/');

var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', () =>{

  console.log('connected');
  let repoSchema = mongoose.Schema({
    html_url: String
  })

  repoSchema.plugin(AutoIncrement, {inc_field: 'id'});
  let Repo = mongoose.model('Repo', repoSchema);

  let save = (repos) => {
    for(var i = 0; i<repos.length; i++){
      repos[i].save();
      console.log(repos[i])
    }
  }

  var test_array = [];
  var repo1 = new Repo({ html_url: 'https://github.com/octocat' });
  var repo2 = new Repo({ html_url: 'https://api.github.com/users/octocat/subscriptions' });

  test_array.push(repo1);
  test_array.push(repo2);

  save(test_array);

  Repo.find({html_url:'https://api.github.com/users/octocat/subscriptions'}, () => {console.log('result')});

  module.exports.save = save;

})
