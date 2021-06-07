import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const ProtectedRoute = ({
  component: Component,
  role,
  to,
  location,
  ...rest
}) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);
  const getPathName = () => {
    if (isLoggedIn) {
      if (isAdmin) {
        return '/records';
      } else if (!isLoggedIn) {
        return '/events';
      }
    } else {
      return '/login';
    }
  };
  return (
    <Route
      location={location}
      render={(props) =>
        (role === 'isAdmin' && isAdmin) ||
        (role === 'isLoggedIn' && isLoggedIn) ||
        (role === 'isStudent' && !isLoggedIn) ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: getPathName(),
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
