import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import ListItem from './components/ListItem.jsx';
const axios =     require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    axios.get('/repos')
    .then( (response) => {
      this.setState({repos:response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    //
    axios.post('/repos', {
    body: {username:term}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
