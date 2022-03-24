import React from 'react'
import Forms from '../logIn/inputs'
import logo from './images/logo.png'
import './login.css'

function Login() {
    return(
      <section>
        <div class="container">
          <div class="row" className="landing-style">
            <div class="col-lg-6">
              <div className="stylingimage">
                <img src={logo} alt="Logo" height="100%" width="100%"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div className="form" >
                    <Forms />
              </div>
            </div>
          </div>
        </div>     
      </section>
        )
  }

export default Login;