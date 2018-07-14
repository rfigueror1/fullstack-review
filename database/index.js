const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://localhost/fetcher/');

var db = mongoose.connection;

let repoSchema = mongoose.Schema({
    html_url: String,
})

repoSchema.plugin(AutoIncrement, {inc_field: 'id'});
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  for(var i = 0; i<repos.length; i++){
    repos[i].save();
  }
}

module.exports.save = save;
module.exports.Repo = Repo;

var newRepo1 = new Repo({html_url:'https://api.github.com/users/octocat'});
var newRepo2 = new Repo({html_url:'https://api.github.com/users/rfigueror1'});
var newArray = [];
newArray.push(newRepo1, newRepo2);
save(newArray, ()=>{console.log('saved')});
