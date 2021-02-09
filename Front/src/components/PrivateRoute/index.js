import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthentication } from 'src/components/UserContext';

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
