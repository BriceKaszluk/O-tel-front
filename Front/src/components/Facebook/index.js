import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
      isLoggeIn: false,
      UserId: '',
      name: '',
      email: '',
      picture: '',
    }

    responseFacebook = (response) => {
      console.log(response);
    }

    componentClicked = () => console.log('clicked')

    render() {
      let fbContent;

      if (this.state.isLoggeIn) {
        fbContent = null;
      }
      else {
        fbContent = (
            <FacebookLogin
                appId="170403177866239"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
        );
      }
      return (
          <div>{fbContent} </div>
      );
    }
}
