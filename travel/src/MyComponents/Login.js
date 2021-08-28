import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Button, Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImFacebook } from "react-icons/im";
import GoogleLogin from 'react-google-login';
//import { GoogleLoginButton } from 'react-social-login-buttons';



export default class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
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
          //buttonText="login with Facebook"
          fields="name,email,picture"
          onClick={this.componentClicked}
          icon={< ImFacebook/>}
          size="small"
          
        callback={this.responseFacebook}
        />
      );
    }
    
    
    googlecontent = (
      <GoogleLogin 
          clientId="981202263286-o5o7kckunac0q5b7t45quedjhi1p68gg.apps.googleusercontent.com"
          buttonText="Login with Google"
          //render={renderProps => (
            //<GoogleLoginButton >LOGIN WITH GOOGLE</GoogleLoginButton>
         //)}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          //callback={this.responseGoogle}
          />
    );
          
    return (
      <div className="container" style={{ width: '100%', padding: '15px', margin: 'auto', height: '100%', maxWidth: "600px" }}>
        <form >
          <div style={{maxWidth:"330px",width: '100%', padding: '15px', margin: 'auto', height: '100%'}}>
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
          </div>
          <div className="text-center pt-2">
            or continue with your social account
          </div>
          <div className="m-2" style={{textAlign:"center"}}>{fbContent} OR {googlecontent}</div>
          <br/>
          <div className="text-center " >
            New user?<Link className="text-center" to="/Register">Register</Link>
          </div>
        </form>

      </div>

    )
  }
}
