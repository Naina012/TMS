import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LoginModal.css';
import "firebase/compat/auth";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { handleSignOut } from './LoginManager';
import { SET_USER, useAppContext } from '../../context';

const Form = () => {
  const { dispatch } = useAppContext()
  const [isSignUp, setSignUp] = useState(false);

  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" }};

  const handleResponse = (res) => {
    dispatch({ type: SET_USER, payload: res })
    if (!res.error) {
      toast.success('Successfully Logged In!');
      history(from);
    }
    if (res.email === "admin@mail.com") {
      swal({
        title: "Warning!",
        text: "You have entered the admin panel for testing. Please don't abuse this facility!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(ok => {
        if (!ok) {
          handleSignOut()
            .then(res => {
              dispatch({ type: SET_USER, payload: res })
              toast.error('Logged Out!');
            })
        }
      });
    }
  }

  return (
    <div className={`${isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
      <Link to="/">
        <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
      </Link>
      <div className="forms-container">
        <div className="signIn-singUp">
          <SignInForm handleResponse={handleResponse} />
          <SignUpForm handleResponse={handleResponse} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Welcome to the Task Management System. Sign up to get started!</p>
            <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
          </div>
          {/* Add your own image for signup */}
          {/* <img src={`${your-signup-image-path}`} alt="" className="pImg" /> */}
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Welcome back to the Task Management System. Sign in to continue your work!</p>
            <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
          </div>
          {/* Add your own image for login */}
          {/* <img src={`${your-login-image-path}`} alt="" className="pImg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
