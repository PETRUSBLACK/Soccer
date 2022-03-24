import React from 'react'
import Forms from '../create-account/inputs'
// import logo from './images/logo.png'
import logo_2 from './images/logo_2.png'
import './create.css';

function CreateAccount() {
    return(
      <section>
        <div class="container">
          <div class="row" className="landing-style">
            <div class="col-lg-6">
              <div className="stylingimage">
                <img src={logo_2} alt="Logo" height="100%" width="100%"/>
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

export default CreateAccount;