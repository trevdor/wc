/*import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import { connectProfile, logout } from './auth';
import './Site.css';

class Site extends React.Component {
  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  render() {
    return (
      <div className="Site">
        { this.props.children }
      </div>
    );
  }

  renderUserControls() {
    const { profile } = this.props;

    if (profile) {
      return (
        <div className="Site-profileControls">
          <img className="Site-profilePicture" src={ profile.picture } alt={ profile.nickname } />
          <Link to="/profile/edit">{profile.nickname}</Link> &middot; <a onClick={ () => logout() }>Log Out</a>
        </div>
      );
    } else {
      return (
        <div className="Site-profileControls">
          <span>Guest</span> &middot; <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default connectProfile(Site);*/
