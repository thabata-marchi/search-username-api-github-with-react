import React from 'react';
import SearchUser from '../SearchUser';
import UserInfo from '../UserInfo';

class Github extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      repos: [],
    };
  }

  updateUser = (user) => {
    this.setState({ user: user });
  }

  updateRepos = (repos) => {
    this.setState({ repos: repos })
  }

  render(){
    return(
      <div className="container">
        <SearchUser 
          updateUser={this.updateUser} 
          updateRepos={this.updateRepos} />
        <UserInfo 
          user={this.state.user}
          repos={this.state.repos} />
      </div>
    )
  }
}

export default Github;