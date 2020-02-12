import React, { useState, useEffect } from 'react';

const UserRepos = (props) => {
  const [reposCount, setReposCount] = useState(0);
  useEffect(() => { setReposCount(props.repos.length) }, [props]);

  let repos = props.repos.map((repo, key) => (
    <div key={key} className="thumbnail">
      <div className="caption">
        <h3>
          {repo.name}
          <span className="badge">{repo.stargazers_count} STARS</span>
        </h3>
        <p>{repo.description}</p>
        <p>
          <a href={repo.html_url} className="btn btn-primary">Repository</a>
          <a href={repo.html_url + '/issues'} className="btn btn-default">Issues ({repo.open_issues})</a>
        </p>
      </div>
    </div>
  ))

  return (
    <div>
      <h2>{reposCount} repositories</h2>
      {repos}
    </div>
  )
}

export default UserRepos;