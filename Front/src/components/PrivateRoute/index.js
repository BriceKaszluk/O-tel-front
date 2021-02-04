import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useAuthentication } from 'src/components/UserContext';
import ConnexionForm from 'src/components/Connexion';

export default (props) => {
  const { user, setIsActiveModalConnexion } = useAuthentication();
  const history = useHistory();

  if(!user){
    useEffect(() => {
      history.push('/');
      setIsActiveModalConnexion(true);
    });
  }

  return (
    <React.Fragment>
    {
      user && <Route {...props} />
    }
    </React.Fragment>
  )
}
