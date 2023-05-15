import React ,{ useEffect, useRef }  from 'react'
import { useAuth } from "../../fire/firebase";

import Svgs from '../sidebarMobileSvgs/sidebarMobileSvgs' 
import Links from '../../../components/Links/links';

const SidebarMobile = (props) => {
   const ref = useRef();
   const currentUser = useAuth();

   useOnClickOutside(ref, () => props.setToggle(false));
  let listOne =[
   {name:'Home' ,   svg:Svgs.home,   url:"/"},
   {name:'Random' , svg:Svgs.random, url:"/contents"},
   {name:'Nearby' , svg:Svgs.nearby, url:"/nearby"}
  ]
  let listTwo =[
    {name:'Log in' ,   svg:Svgs.logIn,    url:"/login"},
    {name:'Settings' , svg:Svgs.settings, url:"/aboutWikipedia"},
    {name:'Donate' ,   svg:Svgs.donate,   url:"/donate"}
  ]
  const OVERLAY_STYLES = {
    position: "fixed",
    top : 0,
    left : 0,
    bottom :0,
    right:0,
    backgroundColor : " rgba(0,0,0,.7)",
    zIndex : 1000

  } 

   return ( 
      <> 
      {props.toggle &&
        (
        <div style={OVERLAY_STYLES}>
          <div className='position-relative' ref={ref}>
            <div className="position-absolute bg-light" style={{width:250, height:1500}}>
            {
                    listOne.map((i, index)=>{
                      return (
                        <div className="d-flex flex-row pt-2 ps-2 bg-white mb-1" key={index}>
                            {i.svg}
                            <div className='mt-1' onClick={()=>props.setToggle(false)}>
                              <Links linkTxt={i.name} urls={i.url} />
                            </div>
                        </div> 
                      )
                    })
            }
            {currentUser ?
              <>
              {/* log out */}
               <div className="d-flex flex-row pt-2 ps-2 bg-white my-4">
                   {Svgs.logOut}
                   <div className='mt-1' onClick={()=>props.setToggle(false)}>
                     <Links linkTxt='Log out' urls='/hero'  />
                   </div>
                </div> 
              </> 
              :
              <>
                {
                  // log in
                listTwo.map((i, index)=>{
                  return (
                    <div className="d-flex flex-row pt-2 ps-2 bg-white my-4" key={index}>
                        {i.svg}
                        <div className='mt-1' onClick={()=>props.setToggle(false)}>
                          <Links linkTxt={i.name} urls={i.url}  />
                        </div>
                    </div> 
                  )
                })
                }
              </>
            }
              <div className="d-flex flex-row-reverse me-2" onClick={()=>props.setToggle(false)}>
                <Links urls="/aboutWikipedia"  linkTxt="About Wikipedia"/>
              </div>
            </div>
          </div>
        </div>
        )
      } 
      </>        
     );
};
//hook
 function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
export default SidebarMobile;