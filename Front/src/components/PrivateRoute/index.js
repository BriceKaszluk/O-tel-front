import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (

  { component: Component, setConnexionActive, ...rest },
) => (
    <Route
{...rest}
render={(props) => {
  const { currentUser } = localStorage;
  if (!currentUser) {
    setConnexionActive(true);
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
  }

  // authorised so return component
  return <Component {...props} />;
}}
    />
);
