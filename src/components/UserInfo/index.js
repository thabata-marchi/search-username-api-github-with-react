import React from 'react';
import UserRepos from '../../components/UserRepos';

const UserInfo = (props) => {
    let userInfo = props.user ? (
      <div className="row">
        <div className="col-lg-4">
          <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="" />
          <h2>{props.user.login}</h2>
          <p>{props.user.name}</p>
          <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
          <p><a className="btn btn-defaul<t" href={props.user.html_url}>View details</a></p>
        </div>
        <div className="col-lg-8">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    ) : null;
    return userInfo;
}
export default UserInfo;