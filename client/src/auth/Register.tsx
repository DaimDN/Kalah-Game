import React, {FC, Fragment, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import styled from 'styled-components'
import {api} from '../util/api'

export const RegisterationController : FC = () => {

    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: ''
    });

    const [Alert, setAlert] = useState("");
    const History = useHistory();
    const { firstname, lastname, email, password, password2 } = formData;
  
    const onChange = (e: any) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async (e: any) : Promise<void> => {
      e.preventDefault();
      if (password !== password2) {
        setAlert("Password didn't match");
        setTimeout(function(){ setAlert("")}, 1000);

      } else {
          var RegisterPayload = {firstname, lastname, email, password};
          let RegisterDone = await api.post('/register', RegisterPayload);
          const Response = RegisterDone.data;
          console.log(Response);

          if(Response.error){
              setAlert(Response.error);
              setTimeout(function(){ setAlert("")}, 1000);
          }
          else{
                alert("Successfully Registered");
          History.push("/login"); 
          }     
      }
    }; 
  
    return (
      <Fragment>
             <div className="mx-auto text-center">
                 {Alert !== "" ? 
                 <div style={{width: '60%', margin: 'auto'}}> 
                 <div className="alert alert-danger"> 
                    <p className="lead">{Alert}</p>
                  </div> 
                        </div>
                  : <div></div> }
          <h1 className=" display-2 text-primary">Cycleon's Game</h1>
          <p className="lead">
            <i className="fas fa-user" /> Register Account
          </p>
          <InnerRegisterContainer>
       
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">

                    <div className="row">
                        <div className="col-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            value={firstname}
                            className="form-control"
                            onChange={onChange}
                            />
                        </div>
                        <div className="col-6">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            value={lastname}
                            className="form-control"
                            onChange={onChange}
                            />
                        </div>

                    </div>

           
          </div>
          <br/>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              className="form-control"
              onChange={onChange}
            />
             </div>
             <br/>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <br/>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              className="form-control"
              value={password2}
              onChange={onChange}
            />
          </div>
          <br/>
          <input type="submit" className="btn btn-primary btn-lg" value="Register" />
        </form>
        <br/>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        </InnerRegisterContainer>
        </div>
      </Fragment>
    );
  };

  

  const InnerRegisterContainer = styled.div`
width: 40%;
margin: auto;
`
