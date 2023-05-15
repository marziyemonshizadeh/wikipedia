import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Links from '../../../components/Links/links';

import Imgs from '../sisterProjectImg/sisterProjectImg'


class SisterProject extends Component {
    state = { 
        wikiSisters : [
            {link:'Commons' , explanation:' Free media repository', src : Imgs.Commons},
            {link:'Media Wiki' , explanation:' Wiki software development' , src : Imgs.MediaWiki},
            {link:'Meta-Wiki' , explanation:' Wikimedia project coordination', src : Imgs.MetaWiki},
            {link:'Wiki Books' , explanation:' Free textbooks and manuals', src : Imgs.Wikibooks},
            {link:'Wiki Data' , explanation:' Free knowledge base', src : Imgs.Wikidata},
            {link:'Wiki News' , explanation:' Free-content news', src : Imgs.Wikinews},
            {link:'Wiki quote' , explanation:' Collection of quotations', src : Imgs.Wikiquote},
            {link:'Wiki Source' , explanation:' Free-content library', src : Imgs.Wikisource},
            {link:'Wiki Species' , explanation:' Directory of species', src : Imgs.Wikispecies},
            {link:'WikiVersity' , explanation:' Free learning tools', src : Imgs.Wikiversity},
            {link:'Wikivoyage' , explanation:' Free travel guide', src : Imgs.wikivoyage},
            {link:'Wiktionary' , explanation:' Dictionary and thesaurus', src : Imgs.Wiktionary}
        ]
     } 
    render() { 
        return (
            <>
             {
                this.state.wikiSisters.map((i, index)=>{
                   return (  
                    <div className="col d-flex align-items-start" key={index}>
                        <LazyLoadImage
                         src={i.src}
                         alt={i.link}
                         height={48} 
                         width={48}
                        />
                        {/* <img src={i.src}  alt="index"  /> */}
                        <div className="ms-3">
                          <b><Links linkTxt={i.link} urls="/"/></b>
                          <p className="card-text">{i.explanation}</p>
                        </div>
                    </div>
                   )
                 })  
             }  
            </>
        );
    }
}
 
export default SisterProject;