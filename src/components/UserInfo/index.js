import React from 'react';
import UserRepos from '../../components/UserRepos';

const UserInfo = (props) => {
    let userInfo = props.user ? (
      <div className="row">
        <div className="col-md-2 col-sm-4 col-xs-12 pr-xs-0">
          <div className="card">
            <img className="card-img-top" src={props.user.avatar_url} alt="avatar" width="140" height="" />
            <div className="card-body">
              <h2>{props.user.login}</h2>
              <p>{props.user.name}</p>
              <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
              <p><a className="btn btn-primary" href={props.user.html_url}>View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-8 col-xs-12">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    ) : null;
    return userInfo;
}
export default UserInfo;