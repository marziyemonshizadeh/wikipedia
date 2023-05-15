import React, { Component } from 'react'
import Links from '../../Links/links';

class LanguageList extends Component {
    state = { 
        languges:["english .",
              "spanish .",
              "Español .",
              "ไทย.",
              "Türkçe .",
              "Bân-lâm-gú .",
              "中文 .",
              "spagermany" 
            ]
     } 
    render() { 
        return ( 
            <>
             {
                this.state.languges.map((i, index)=>{
                   return (
                      <li className='list-inline-item' key={index}>
                        <Links linkTxt={i}  />
                      </li>
                    )
                 })  
             }
            </>

        );
    }
}
export default LanguageList;