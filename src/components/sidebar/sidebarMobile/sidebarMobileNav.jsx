import React, {useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import SidebarMobile from './sidebarMobile'

import LogoInSm from '../../../assets/Images/sidebarLogo/sidebarMobileLogo.png'

const SidebarMobileNav = () => {
    const [toggle, setToggle] = useState(false)
    return ( 
        <>
            <SidebarMobile toggle={toggle} setToggle={setToggle}/>
            <div className="d-sm-flex justify-content-between mb-3 pt-1 d-md-none bg-dark" >
                <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
                    <div className="container-fluid d-flex align-items-center">
                    <div className="d-flex align-items-center fs-4 mb-0"
                         onClick={() => setToggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>      
                    </div>
                        <LazyLoadImage
                            src={LogoInSm}
                            alt="mobileSidebarLogo"
                            className="w-25 h-50 m-2"
                            />
                    <div className='input-group rounded mt-1 ms-5'>
                            <input type="search" className='form-control rounded' placeholder="Search wikipedia" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                    </div>
                </header>
            </div>
        </>
     );
}
 
export default SidebarMobileNav;