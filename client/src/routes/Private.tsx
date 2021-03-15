import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Ellipsis} from 'react-css-spinners';

interface PrivateRouteInterface {
  exact: any,
  path: any,
  component: any,
  auth : {
    isAuthenticated: any,
    loading : any,
  }

}

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}: PrivateRouteInterface) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Ellipsis />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);