import React, {FC, Fragment} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Grid} from 'react-css-spinners'
import styled from 'styled-components'

interface PrivateRoutedCycleonInterface {  
    exact: true;
    path: String;  
    component: any;
    auth: {
        isAuthenticated : boolean,
        loading: any; 
    }
}
const PrivateRoute  = ({
  exact: exact,
  path: path,
  component:  Component ,
  auth: { isAuthenticated , loading }
  ,...rest
}:  PrivateRoutedCycleonInterface
) => (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <InnerIntelopeCycleon>
            <SpinnerFragment/>
          </InnerIntelopeCycleon>
         
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
  const SpinnerFragment: FC = ()=>{
    return(
        <Fragment>
             <Grid color="black"  size={140}/>
        </Fragment>
    )
  }
  const InnerIntelopeCycleon = styled.div `
  margin: auto;
  text-align: center;
  margin-top: 20vh;
  `
  export default connect(mapStateToProps)(PrivateRoute);


