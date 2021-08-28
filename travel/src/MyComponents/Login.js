import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Button, Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImFacebook } from "react-icons/im";
import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';



export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  state1 = {
    isLogIn: false,
    ID: "",
    nameg: "",
    emailg: "",
    pictureg: ""
  };

  responseFacebook = response => {
     console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  responseGoogle= response =>{
    console.log(response);
    console.log(response.profileObj);
    this.setState({
      isLogIn: true,
      ID: response.userID,
      nameg: response.name,
      emailg: response.email,
      pictureg: response.picture.data.url
    });
  }

  render() {

    let fbContent;
    let googlecontent;
    

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="698270781569210"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          icon={< ImFacebook/>}
          size="medium"
          
        callback={this.responseFacebook}
        />
      );
    }
    if (this.state1.isLogIn) {
      googlecontent = (
        <div>
          
          <h2>Welcome {this.state1.nameg}</h2>
          Email: {this.state1.emailg}
        </div>
      );
    }else {
    googlecontent = (
      <GoogleLogin 
          clientId="981202263286-o5o7kckunac0q5b7t45quedjhi1p68gg.apps.googleusercontent.com"
          buttonText="Login with Google"
          render={renderProps => (
            <GoogleLoginButton  onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN WITH GOOGLE</GoogleLoginButton>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          onClick={this.componentClicked}
          cookiePolicy={'single_host_origin'}
          callback={this.responseGoogle}
          />
    );
          }
          
    return (
      <div className="container" style={{ width: '100%', padding: '15px', margin: 'auto', height: '100%', maxWidth: "330px" }}>
        <form >
          <h1 style={{ textAlign: 'center' }}>welcome!</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button style={{ width: '100%' }} className="btn-dark btn-block">
            Login
          </Button>
          <div className="text-center pt-3">
            or continue with your social account
          </div>
          <div >
          <div style={{ textAlign:"center",paddingTop:"10px"}}>{fbContent}</div>
          <div style={{paddingTop:"20px",width:"266px",fontSize:"10px",marginLeft:"17px"}}>{googlecontent}</div>
          </div>
          <br/>
          <div className="text-center " >
            New user?<Link className="text-center" to="/Register">Register</Link>
          </div>
        </form>

      </div>

    )
  }
}
