import React from 'react';
import ListItem from './ListItem.jsx';

function RepoList (props) {

  const repos = props.repos;
  console.log(repos, 'repos1');
  var newrepos = repos.slice(0,24)
  const listItems = newrepos.map((repo) =>
    <li>
      <a href={repo.html_url} key={repo.id}>
        {repo.html_url}
      </a>
    </li>
   );

  return(
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <ul>{listItems}</ul>
    </div>
  );
}

export default RepoList;
