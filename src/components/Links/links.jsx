import React from 'react';
import { Link } from "react-router-dom";

const Links = (props) => { 
    let style = ' '
    if(props.disBlock==="true"){
       style+=" d-block ";
    }else if(props.color){
        style+=props.color;
    }

    return (
        <React.Fragment>
            <Link  
                  to={props.urls} 
                  className={style} 
                  style={{textDecoration :'none'}}
                  onMouseLeave={(event) => event.target.style.textDecoration='none'}
                  onMouseEnter={(event) => event.target.style.textDecoration='underline'}
                  data-bs-toggle="tooltip" 
                  data-bs-placement="bottom" 
                  title={props.linkTxt}
                  >
                {props.linkTxt}    
            </Link>{props.children}
        </React.Fragment>
    );
}
 
export default Links;