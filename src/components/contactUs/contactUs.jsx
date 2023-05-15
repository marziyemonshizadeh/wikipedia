import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Boxs from '../boxs/boxStructure/boxs';
import Links from '../Links/links';

import contactUsImg from '../../assets/Images/Contactus.png'

 const Donate = () => {
    return ( 
        <Boxs>
         <h1 className='border-bottom mt-2'>Wikipedia: Contact Us</h1>  
         <p>
            Thank you for your interest in contacting Wikipedia. Before proceeding, some important disclaimers:
         </p> 
         <div className="row mt-3">
               <div className="col-sm-12 col-lg-8">
               <ol className="list list-numbered">
                    <li className="list-item mb-3">
                        <strong>Wikipedia has no central editorial board</strong> . Contributions are made by a large number of volunteers at their own discretion. Edits are neither the responsibility of the <Links urls="/contactus"  linkTxt="Wikimedia Foundation"/>  (the organisation that hosts the site) nor of its staff and edits will not generally be made in response to an email request.
                    </li>
                    <li className="list-item mb-3">
                        Although Wikipedia was founded by <Links urls="/contactus"  linkTxt="Jimmy Wales"/>, he is not personally responsible for our content.
                    </li>
                    <li className="list-item mb-3">
                        If you have questions about the concept of Wikipedia rather than a specific problem, the About Wikipedia page may help.
                    </li>
                    <li className="list-item mb-3">
                         If you want to ask other users for help with editing or using Wikipedia, stop by the <Links urls="/contactus"  linkTxt="Teahouse"/> , Wikipedia's <Links urls="/contactus"  linkTxt="live help channel"/>, or the <Links urls="/contactus"  linkTxt="help desk"/> to ask someone for assistance.
                    </li>
                    <li className="list-item">
                         If you disagree with an article's content, or are involved in a content dispute, see <Links urls="/contactus"  linkTxt="Dispute resolution"/>.
                    </li>
                </ol>         
               </div>
               <div className="col-sm-12 col-lg-4 ">
                     <LazyLoadImage
                              src={contactUsImg}
                              alt="flower img"
                              className="img-fluid"
                     />
               </div>
         </div>
         <p>
            The links on the left should direct you to how to contact us or resolve problems. If you cannot find your issue listed there, you can email helpful, experienced volunteers at info-en@wikimedia.org. Please refrain from emailing about disagreements with content; they will not be resolved via email.
         </p> 
        </Boxs>
     );
 }
  
 export default Donate;