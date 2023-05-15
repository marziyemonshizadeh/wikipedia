import React from 'react';
import { useAuth } from "../fire/firebase";

import Links from '../Links/links';
import '../header/header.css'
const Header = () => {
  const currentUser = useAuth();

  let name = [
    // {txt:'Log in' , url:'login'},
    // {txt:'Create account' , url:'createaccount'},
    {txt:'Contributains' , url:'Contributains'},
    {txt:'Talk' , url:'talk'}
    ]

    // const handleMouseOver = (event)=>{
    //   event.target.style.fill = 'black';
    // }
    // const handleMouseOut = (event)=>{
    //   event.target.style.fill=''
    // }
  return ( 
    <header className="d-md-flex d-none flex-row-reverse justify-content-xs-center align-items-xs-center">
             
           { currentUser ?
              
                 <div className="pe-md-2 pt-md-2 px-1" >
                      <small>
                        <Links linkTxt="Log out" urls="hero"/>
                      </small>
                  </div>
              
              : 
                <>
                 <div className="pe-md-2 pt-md-2 px-1" >
                      <small>
                        <Links linkTxt="Log in" urls="login"/>
                      </small>
                  </div>
                  <div className="pe-md-2 pt-md-2 px-1" >
                      <small>
                        <Links linkTxt="Create account" urls="createaccount"/>
                      </small>
                  </div>
                </>
                
              }

            {
                name.map((link,index)=>{
                 return (
                 <div className="pe-md-2 pt-md-2 px-1" key={index}>
                   <small>
                     <Links linkTxt={link.txt} urls={link.url}/>
                   </small>
                 </div>
                )
              })
            }
                 
                <div className="pe-md-2 pt-md-2 px-1">
                   <small className="colorgray">
                    {currentUser?<>{currentUser?.email}</>:"Not"} logged in</small>
                </div>

                <div className="pe-md-1 pe-2 pt-md-2">
                    <svg
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                        role='button'
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-person-fill headerSvg" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </div>
                
    </header> 
   );
}
 
export default Header;
