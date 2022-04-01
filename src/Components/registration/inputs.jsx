import React from "react";
import './reg.css';
import {FaUserEdit} from 'react-icons/fa'

function Regforms(){
    return(
    <div >
        <p className="welcom-text">
            Tell us about yourself 
        </p> 
        <p className="login-text" style={{fontSize:'10px'}}> 
            Please log in to continue 
        </p>

        <center style={{color:"#F5B629",}}>
            <FaUserEdit size="6.5rem"/> 
        </center>
        <form >
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>First Name</label>
                <input class="form-control col-xs-4" type="text" placeholder="Emeka" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>Last Name</label>
                <input class="form-control col-xs-4" type="text" placeholder="Ikenna" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>Date of birth</label>
                <input class="form-control col-xs-4" type="date" placeholder="Username" style={{fontSize:'12px', border:"0px"}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>Nationality</label>
                <input class="form-control col-xs-4" type="text" placeholder="Ghanaian" style={{fontSize:'12px'}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>Height</label>
                <input class="form-control col-xs-4" type="number" placeholder="Ghanaian" style={{fontSize:'12px', border:"0px"}}/>
            </div>
            <div class="form-group">
                <label for="inputsm" style={{fontSize: '8px', fontFamily: 'Open Sans', color:"#F5B629"}}>Weight</label>
                <input class="form-control col-xs-4" type="number" placeholder="Ikenna" style={{fontSize:'12px', border:"0px"}}/>
            </div>
  

        </form>
    </div>
    )
}
export default Regforms;
