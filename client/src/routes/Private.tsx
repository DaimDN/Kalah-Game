import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners'


interface PrivateRoutedInterface {
    component: string;
    auth: {
        isAutheticated : any ;
        loading: any; 
    }, 
    rest: {

    }
}

const PrivateRoute : PrivateRoutedInterface = ({
     component:  Component ,
     auth: { isAuthenticated , loading }
     ,...rest
  }) => (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <Ellipsis color="#ffdf00" size={40} />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  const mapStateToProps = (state : any )=> ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(PrivateRoute);


