import React, { useState } from 'react';
import GitHubUser from '../../services/GitHubUsers/';

const SearchUser = (props) => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    GitHubUser.getByUsername(username)
      .then(res => {
        props.updateUser(res.data)
      })

    GitHubUser.getReposByUsername(username)
      .then(res => {
        props.updateRepos(res.data)
      })
  }

  return (
    <div className="jumbotron mt-3">
      <h1>GitHub Info</h1>
      <div className="row">
        <form onSubmit={handleSubmit} className="col-12">
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange} 
              className="form-control"
              placeholder="Ex: matheusml"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>

  )
}
export default SearchUser;