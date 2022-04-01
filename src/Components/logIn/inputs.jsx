import React from "react";
import './login.css';
import { MdFrontHand } from "react-icons/md"
import Footer from "./footer";
import { AiFillEye } from 'react-icons/ai';

function Forms(){
    return(
    <div >
        <p className="welcom-text mb-0">
            Welcome back <MdFrontHand size="1.5rem"/>
        </p> 
        <p className="login-text" style={{fontSize:'15px'}}> 
            Please log in to continue 
        </p>
        <form >
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Username or phone number</label>
                <input class="form-control col-xs-4" 
                    type="text" 
                    placeholder="Username" 
                    style={{fontSize:'15px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '10px', fontFamily: 'Open Sans'}}>Password
                </label>
                <div class="input-group">
                    <input class="form-control col-xs-4" 
                        type="password" 
                        placeholder="Password" 
                        style={{fontSize:'15px'}}/>
                    <div class="input-group-append">
                        <span class="input-group-text" style={{backgroundColor:'#402A75', border: "0px"}}>< AiFillEye /></span>
                    </div>
                </div>
                
            </div>

            <p class="float-right" 
                style={{
                    fontSize:'10px', 
                    color:'#F5B629',
                    fontFamily: 'Open Sans'}}
                    >
                        Forget Password? 
            </p> <br/>
            <button type="button" class="btn btn-warning btn-sm btn-block mt-lg-5 mt-2" style={{fontSize:'15px'}}>Log In</button>
            <p style={{fontSize: '10px', textAlign: 'center', marginTop:'10px'}}> Don't have an account? <span style={{color:'#F5B629'}}>Sign Up</span></p>

            <Footer />
        </form>
    </div>
    )
}
export default Forms;
