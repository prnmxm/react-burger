import React, { useEffect, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {refreshToken} from '../services/actions/user'
import { useSelector, useDispatch } from '../hooks';

export const ProtectedRoute: FC<{
  path: string;
  exact?: boolean;
}> = ({ children, ...rest }) => {
  const dispatch = useDispatch();

  const tokenSuccess = useSelector((store) => store.user.refreshSuccess);
  const hasToken = !!localStorage.getItem('refreshToken');
  useEffect(() => {
    if (!tokenSuccess && hasToken) {
      dispatch(refreshToken())
    }
  }, [dispatch, hasToken, tokenSuccess]);

  if (hasToken && !tokenSuccess) {
    return null
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (hasToken && tokenSuccess) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}