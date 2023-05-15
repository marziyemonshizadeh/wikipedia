import React from 'react'

const BoxTitle = (props) => {   
   const STYLES = {
      backgroundColor : props.bg,
      border: props.bordr 
    } 
   return ( 
      <div className='mb-2' style={STYLES}>
           <div className="card-body p-1 ps-2">
              <b>{props.txt}</b>
           </div>
      </div>       
     );
}
 
export default BoxTitle;