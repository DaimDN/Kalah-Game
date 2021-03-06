import React, {
    FC,
    useEffect,
     useState, Fragment 
    } from 'react'
import {Redirect, Link, useHistory} from 'react-router-dom'
import {login} from '../action/Auth'
import styled from 'styled-components'
import store from '../store';
import { connect } from 'react-redux';

interface LoginControllerPropsInterface  {
  login: any;
  isAuthenticated : any;
}
 const LoginController: any  = (
       { login,
         isAuthenticated } :  
       LoginControllerPropsInterface
    ) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const onChange = (e : any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = (e : any)=> {
        e.preventDefault();
        var payload = {email, password};
       login(payload);
    };

    if (isAuthenticated) {
      return <Redirect to="/home" />;
    }
    
    return (
        <Fragment>
            <div className="mx-auto text-center">
             
          <h1 className=" display-2 text-primary">Cycleon's Game</h1>
          <p className="lead">
            <i className="fas fa-user" /> Account Access
          </p>
          <InnerLoginContainer>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="form-control"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <br/>
            <input type="submit" className="btn btn-lg btn-primary" value="Login" />
          </form>
          </InnerLoginContainer>
          <br/>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
          </div>
        </Fragment>
      );
    };   

    const mapStateToProps = (state : any) => ({
      isAuthenticated: state.auth.isAuthenticated
    });
    
    export default connect(mapStateToProps, {login })(LoginController);
    

const InnerLoginContainer = styled.div`
width: 40%;
margin: auto;
`
