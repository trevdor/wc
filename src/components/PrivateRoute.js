import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { isLoggedIn } from './Auth';

export default function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route render={ props => (
      isLoggedIn() ? (
        <Component { ...props } { ...rest } />
      ) : (
        <Redirect to={ {
          pathname: '/login',
          state: { from: props.location },
        } }/>
      )
    ) }/>
  )
}