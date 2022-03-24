import React from 'react';
import { FaGoogle, FaFacebookF} from "react-icons/fa";
import { BsApple} from "react-icons/bs";


function Footer() {
    return <>
            <div style={{display:'flex', fontSize: '10px', marginTop: '85px', marginBottom:'20px'}} class="justify-content-around"> 
                <div style={{backgroundColor:'#F5B629', marginRight:'5px',height:'1px', width: '30%', marginTop:'6px'}}></div>
                <div style={{marginRight:'5px', color:'#F5B629'}}>Don't have an account? Sign Up</div>
                <div style={{backgroundColor:'#F5B629', height:'1px', width: '30%', marginTop:'6px'}}></div>
            </div>
            <div style={{display:'flex'}} class="justify-content-around px-5">
                <div className="login-icons"><FaGoogle color='#F5B633' size='1rem' /> </div>
                <div className="login-icons"><FaFacebookF color='#F5B629' size='1rem'/>  </div>
                <div className="login-icons"><BsApple color='#F5B629' size='1rem'/> </div>
            </div>
           </>;
  }

export default Footer;





