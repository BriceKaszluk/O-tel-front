import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

import './styles.scss';

export default class Facebook extends Component {
    state = {
      isLoggeIn: false,
      UserId: '',
      name: '',
      email: '',
      picture: '',
    }

    responseFacebook = (response) => {
      // console.log(response);

      this.setState({
        isLoggeIn: true,
        userID: response.userID, 
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      });
    }

    componentClicked = () => console.log('clicked')

    render() {
      let fbContent;

      if (this.state.isLoggeIn) {
        fbContent = (
            <div className="fbContent">
                <img src={this.state.picture} alt={this.state.name} />
                <h4>Bienvenue {this.state.name} </h4>
                <div className="fbContent__email">Email: {this.state.email}</div>
            </div>
        );
      }
      else {
        fbContent = (
            <FacebookLogin
                appId="170403177866239"
                autoLoad
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
