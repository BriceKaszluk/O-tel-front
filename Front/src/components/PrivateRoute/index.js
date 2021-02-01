import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from 'src/components/UserContext';

export default (props) => {
  const { user } = useAuthentication();
  return (
    <React.Fragment>
    {
      user && <Route {...props} />
    }
    </React.Fragment>
  )
}
