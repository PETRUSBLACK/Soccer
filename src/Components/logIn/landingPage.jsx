import React from 'react'
// import Forms from './inputs'

function Landpage() {
    const landingStyle = {backgroundColor : '#231546',color : 'white', 
                          width: '100%',height: '780px', display:'flex' }

    const stylingimage = {width: '700px',height: '695px',
                          backgroundColor: 'yellow'}

    const form = {width: '530px', height: '595px', backgroundColor:'#321F61', 
                  marginLeft:'100px', marginTop:'40px', borderRadius: '20px'}

    return <div style={landingStyle}>
                <div style={stylingimage}>
                </div>
                <div style={form} >
                    {/* <Forms /> */}
                </div>
           </div>;
  }

export default Landpage;