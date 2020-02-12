import React from 'react';
import UserRepos from '../../components/UserRepos';

const UserInfo = (user, repos) => {
    let userInfo = user ? (
      <div className="row">
        <div className="col-md-2 col-sm-4 col-xs-12 pr-xs-0">
          <div className="card">
            <img className="card-img-top" src={user.avatar_url} alt="avatar" width="140" height="" />
            <div className="card-body">
              <h2>{user.login}</h2>
              <p>{user.name}</p>
              <p>Followers: {user.followers} / Following: {user.following}</p>
              <p><a className="btn btn-primary" href={user.html_url}>View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-8 col-xs-12">
          <UserRepos repos={repos} />
        </div>
      </div>
    ) : null;
    return userInfo;
}
export default UserInfo;