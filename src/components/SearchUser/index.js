import React from 'react';
import GitHubUser from '../../services/GitHubUsers/';

class SearchUser extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name] : value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.username);

    GitHubUser.getByUsername(this.state.username)
          .then(res => {
            this.props.updateUser(res.data)
          })

    GitHubUser.getReposByUsername(this.state.username)
          .then(res => {
            this.props.updateRepos(res.data)

          })
  }  

  // this.propTypes = {
  //   updateUser: this.propTypes.function.isRequired,
  //   updateRes: this.propTypes.function.isRequired,
  // }

  render(){
    const { username } = this.state;
    return(
      <>
        <div className="container">
          <div className="jumbotron">
            <h1>GitHub Info</h1>
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
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
      </>
    )
  }
}

export default SearchUser;