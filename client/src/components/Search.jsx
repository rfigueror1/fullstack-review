import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    console.log(e)
    this.setState({
      term: e
    });
  }

  search() {
    console.log('clicked');
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms}
        className='search' onChange={() => {
        this.onChange($('.search').val())}}/>
      <button onClick={() => {console.log(this); this.search()}}> Add Repos </button>
    </div>)
  }
}

export default Search;
