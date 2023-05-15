import React, { Component } from 'react';
import LanguageList from '../CommonLanguageListOfArticles/languageList'
import '../wikiarticles/articles.css'

class Articles extends Component {
    state = { 
        NumberOfArticles:['1,000,000','250,000','50,000']
     } 
    render() { 
        return (
            <>
            {this.state.NumberOfArticles.map((i,index)=>{
                        return <div key={index}>
                                 <div className='articles_txt'>
                                     {i}+ articles
                                 </div>
                                 <ul className="list-inline text-center">
                                     <LanguageList/>
                                 </ul>
                               </div>
                      })}   
            </>
        );
    }
}
 
export default Articles;
