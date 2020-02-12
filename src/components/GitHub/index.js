import React, { useState } from 'react';
import SearchUser from '../SearchUser';
import UserInfo from '../UserInfo';

const Github = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const updateUser = (userGithub) => {
    setUser(userGithub);
  }
  const updateRepos = (reposGithub) => {
    setRepos(reposGithub);
  }

  return(
    <div className="container">
      <SearchUser 
        updateUser={updateUser} 
        updateRepos={updateRepos} />
      <UserInfo 
        user={user}
        repos={repos} />
    </div>
  )
}
export default Github;