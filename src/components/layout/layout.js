import React from 'react'
 import  NavbarComponent from './../layout/layout.js';
 import RouteComponent from './../../route/route'




const Layout =()=>{
    return(
    <>
        <div>
            <div> <NavbarComponent/></div>
        </div>
        <div>
            <RouteComponent/>
        </div>
</> 
    )
}

export default Layout;