import React, { useState } from 'react';
import GitHubUser from '../../services/GitHubUsers/';

const SearchUser = (props) => {
  const [ username, setUsername ] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername( value );
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

  return(
      <div className="container">
        <div className="jumbotron">
          <h1>GitHub Info</h1>
          <div className="row">
            <form onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="btn btn-primary">Buscar</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SearchUser;