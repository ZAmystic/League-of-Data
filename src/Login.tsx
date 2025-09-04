import React, { useEffect } from 'react';
import './css/Login.css'; // Assuming you renamed the CSS file
import googleLogo from './assets/images/google logo.png';
import gitHubLogo from './assets/images/github logo.png';
import moodleLogo from './assets/images/moodle logo.png';


const Login: React.FC = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });

    return () => {
      signUpButton?.removeEventListener('click', () => {});
      signInButton?.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1 className='login-header-text'>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <img src={googleLogo} alt="Google logo" />
              </a>
              <a href="#" className="social">
                <img src={gitHubLogo} alt="gitHub logo" />
              </a>
              <a href="#" className="social">
                <img src={moodleLogo} alt="Moodle logo" />
              </a>
            </div>
            <span className='span-login'>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form>
            <h1 className='login-header-text'>Sign in</h1>
            <div className="social-container">
               <a href="#" className="social">
                <img src={googleLogo} alt="Google logo" />
               </a>
               <a href="#" className="social">
                <img src={gitHubLogo} alt="gitHub logo" />
               </a>
               <a href="#" className="social">
                <img src={moodleLogo} alt="Moodle logo" />
               </a>
            </div>
            <span className='span-login'>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Student!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
