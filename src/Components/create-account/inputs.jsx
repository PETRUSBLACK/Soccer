import React from "react";
import './create.css';
import Footer from "./footer";

function Forms(){
    return(
    <div >
        <p className="welcom-text">
            Join Us 
        </p> 
        <p className="login-text" style={{fontSize:'15px'}}> 
            Sign Up to get started 
        </p>
        <form >
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Username</label>
                <input class="form-control" type="text" placeholder="Username" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Phone number</label>
                <input class="form-control" type="text" placeholder="Username" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Password
                </label>
                <input class="form-control" type="password" placeholder="Password" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Confirm Password
                </label>
                <input class="form-control" type="password" placeholder="Password" style={{fontSize:'12px'}}/>
            </div>
            <button type="button" class="btn btn-warning btn-sm btn-block mt-lg-5" style={{fontSize:'12px'}}>Create Account</button>
            <p style={{fontSize: '10px', textAlign: 'center', marginTop:'10px'}}> Already have an account <span style={{color:'#F5B629'}}>Sign In</span></p>

            <Footer />
        </form>
    </div>
    )
}
export default Forms;
