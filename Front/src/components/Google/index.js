import React from 'react';
import './styles.scss';

class App extends React.Component {
  insertGapiScript() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      this.initializeGoogleSignIn();
    };
    document.body.appendChild(script);
  }

  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '306761925622-1sacesevno449dvjjh5ui4n8te8q7ujl.apps.googleusercontent.com',
      });
      console.log('Api inited');

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: () => {
            console.log('User has finished signing in!');
          },
        };
        window.gapi.signin2.render('loginButton', params);
      });
    });
  }

  componentDidMount() {
    console.log('Loading');

    this.insertGapiScript();
  }

  render() {
    return (
        <div className="App">
            <a id="loginButton">Sign in with Google</a>
        </div>
    );
  }
}

export default App;
