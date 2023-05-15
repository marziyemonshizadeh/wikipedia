import React from 'react'
const Navbar = () => {
  return ( 
      <nav className="navbar navbar-expand-sm d-lg-block d-none" id="mynavbar">
           <div className="collapse navbar-collapse ms-2">
             <ul className="navbar-nav me-auto">
               <div className="nav nav-tabs" id="nav-tab" role="tablist">

                 <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                   type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                   Main Page
                 </button>

                 <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                   type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                   Talk
                 </button>
                 
               </div>
             </ul>
             <div className="nav nav-tabs" id="nav-tab" role="tablist">

               <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                 type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                 Read
               </button>

               <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                 type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                 View source
               </button>

               <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                 type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                 view history
               </button>

             </div>
             {/* searchbox  */}
             <div className="position-relative me-2 w-25 d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search position-absolute m-2" viewBox="0 0 16 16">
                            <path
                              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                   <input className="form-control" type="search" placeholder="Search wikipedia"/>
             </div>
           </div>
      </nav>
   );
}
export default Navbar;