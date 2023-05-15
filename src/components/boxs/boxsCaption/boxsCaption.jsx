import React from 'react'
import Links from '../../Links/links'

const boxsCaption = () => {
    return ( 
        <div className="d-flex flex-row-reverse p-2">
               <strong>
                 <Links linkTxt="Archive" urls="/"/> . <Links linkTxt="By email"/> . <Links linkTxt="More featured articles" urls="/"/>
               </strong>
        </div>
     );
}
 
export default boxsCaption;