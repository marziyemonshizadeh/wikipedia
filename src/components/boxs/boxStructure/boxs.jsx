import React  from 'react'

const Boxs = (props) => {
        let style=" card  border mb-1 " ;
        style+=props.bg;
        style+=props.txtCenter;

        return (
              <div className={style}>
                <div className="card-body clearfix">
                     {props.children}
                </div>
              </div>
        )
    } 
export default Boxs;