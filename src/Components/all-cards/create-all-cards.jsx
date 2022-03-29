import React from 'react'
import { BsAlignCenter } from 'react-icons/bs';
import './create.css';
import logo_2 from './images/logo_2.png'
import Continue from './continue';

function CreateAccount() {
    return(
      <section>
        <div class="row col-lg-12 " className="landing-style">
          <div class="form">
            <center className="sportman">What Sportsman are you?</center>
            <center>This helps us curate your Experience</center>
          <div style={{display:"flex", padding:"0px 7%"}}> 
              <div class="card" className="allcard">
                  <img src={logo_2} class="card-img-top" alt="loto" height="210rem" style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px", transition: "width 2s, height 2s", }}/>
                  <p class="card-text p-2 ml-2" >
                    <span style={{fontSize:"10px", color:"#F5B629"}}>A Footballer</span> <br />
                    <span style={{fontSize:"10px", lineHeight:"20px", fontSize:"7px"}}>Join teams, play matches, play in tournaments, much more</span>
                  </p>
              </div>

              <div class="card" className="allcard">
                  <img src={logo_2} class="card-img-top" alt="loto" height="210rem" style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}/>
                      <p class="card-text p-2" >
                        <span style={{fontSize:"10px", color:"#F5B629"}}>A Manager</span> <br />
                        <span style={{fontSize:"10px", lineHeight:"20px", fontSize:"7px"}}>Create teams, play matches, play in tournaments, much more</span>
                      </p>
              </div>
              <div class="card" className="allcard">
                  <img src={logo_2} class="card-img-top" alt="loto" height="210rem" style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}/>
                      <p class="card-text p-2" >
                        <span style={{fontSize:"10px", color:"#F5B629"}}>A Scout Coach</span> <br />
                        <span style={{fontSize:"10px", lineHeight:"20px", fontSize:"7px"}}>Scout Players, Link players with clubs, much more</span>
                      </p>
              </div>
              <div class="card" className="allcard">
                  <img src={logo_2} class="card-img-top" alt="loto" height="210rem" style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}/>
                      <p class="card-text p-2" >
                      <span style={{fontSize:"10px", color:"#F5B629"}}>A Sponsor</span> <br />
                        <span style={{fontSize:"10px", lineHeight:"20px", fontSize:"7px"}}>Create Tournaments, sponsor tournaments</span>
                      </p>
              </div>
            </div>

            {/* adding the continue component */}
            <Continue />
            <center style={{marginTop:"10px"}}>Go back to Sign In</center>
          </div>
        </div> 
      </section>
        )
  }

export default CreateAccount;