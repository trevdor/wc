import React from 'react';
import { connectProfile } from '../auth';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTheme from '../styles/MainTheme';
import './EditProfile.css';

class EditProfile extends React.Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  state = {
    error: null,
    saved: false,
    saving: false
  }

  render() {
    const {profile} = this.props;
    const {saving, saved} = this.state;
    const user_metadata = profile.user_metadata || {};

    return (
      <MuiThemeProvider muiTheme={ MainTheme }>
        <div>
          <div className="EditProfile-heading">Your Profile</div>
            <TextField
              id="nickname"
              floatingLabelText="Nickname"
              defaultValue={profile.nickname}
            />
            <TextField
              id="name"
              floatingLabelText="Name"
              defaultValue={profile.name}
            />
            <TextField
              id="email"
              floatingLabelText="Email"
              defaultValue={profile.email}
            />
            <TextField
              ref={(ref) => this.locationInput = ref}
              className="EditProfile-locationInput"
              id="location"
              floatingLabelText="Location"
              hintText="City or State"
              defaultValue={user_metadata.location}
            />
            <div className="EditProfile-formControls">
              <button className="EditProfile-submitButton" type="submit">
                {saving ? 'Saving...' : 'Save'}
              </button>
              {saved && (
                <div className="EditProfile-saved">Saved</div>
              )}
            </div>
          </div>
      </MuiThemeProvider>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({saving: true}, async () => {
      const error = await this.props.onUpdateProfile({
        user_metadata: {
          location: this.locationInput.value
        }
      });

      this.setState({error, saved: !error, saving: false});
    });
  }

  onClearSaved = (event) => {
    this.setState({saved: false});
  }
}

export default connectProfile(EditProfile);
