import React from "react";
import './otp.css';

function Forms(){
    return(
    <div >
        <p className="welcom-text">
            OTP
        </p> 
        <p className="login-text" style={{fontSize:'13px'}}> 
            Kindly enter the OTP that was sent to your number via SMS 
        </p>
        <form >
            <div class="form-group" >
                <input class="form-control col-xs-2" type="text" className="otp-box" />
                <input class="form-control col-xs-2" type="text" className="otp-box" />
                <input class="form-control col-xs-2" type="text" className="otp-box" />
                <input class="form-control col-xs-2" type="text" className="otp-box" />
            </div>
        </form>
        <p style={{fontSize:'13px'}}>Didn't get the code? <span style={{color:"#F5B629"}}>Resend Now</span></p>
    </div>
    )
}
export default Forms;
