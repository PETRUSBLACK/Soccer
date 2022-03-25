import React from 'react'
import './otp.css'
import Forms from './inputs';

function Otp() {
    return(
      <section>
        <div>
          <div class="row" className="landing-style">
            <div class="col-lg-6 offset-lg-3">
              <div className="form" >
                <Forms />
              </div>
            </div>
          </div>
        </div>     
      </section>
        )
  }

export default Otp;