import React, { Suspense, lazy } from 'react'
import { Routes, Route  } from "react-router-dom";

//style
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../sass/style'
import './App.css';

//import components
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebarDesktop/sidebar';
import Main from '../components/main/main';
import Footer from'../components/footer/footer'


//import lazyload components
const LazyContributains = lazy(()=> import ('../components/Contributains/Contributains'))
const LazyCreateAccount = lazy(()=> import ('../components/CreateAccount/createAccount'))
const LazyLogin = lazy(()=> import ('../components/logIn/logIn'))
const LazyAboutWikipedia = lazy(()=> import ('../components/aboutWikipedia/aboutWikipedia'))
const LazyContents = lazy(()=> import ('../components/contentsPage/contents'))
const LazyTalk = lazy(()=> import ('../components/Talk/talk'))
const LazyDonate = lazy(()=> import ('../components/Donate/Donate'))
const LazyHero = lazy(()=> import ('../components/hero/hero'))
const LazyNearby = lazy(()=> import ('./nearby/nearby'))
const LazyContactUs = lazy(()=> import ('./contactUs/contactUs'))

function App() {
  return (
    
    <div className="App">
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-xs-12 bg-sm-dark bg-light  vh-300'>
            <Sidebar/>
          </div>
          <div className='col-lg-10 col-md-9 col-xs-12 vh-300 mb-3 main'>
            <Header/>

            <Routes>
                <Route path="/wikipedia" element={<Main />} />
                <Route path="/" element={<Main />} />
                <Route path="createaccount" element={
                  <Suspense fallback='loading...'>
                        <LazyCreateAccount/>                                      
                  </Suspense>
                } />
                <Route path="hero" element={
                  <Suspense fallback='loading...'>
                        <LazyHero />                                      
                  </Suspense>
                } />
                <Route path="Contributains" element={
                  <Suspense fallback='loading...'>
                      <LazyContributains/>
                  </Suspense>
                } />
                <Route path="talk" element={
                  <Suspense fallback='loading...'>
                    <LazyTalk/>
                </Suspense>
                } />
                <Route path="donate" element={
                  <Suspense fallback='loading...'>
                    <LazyDonate/>
                  </Suspense>
                } />
                <Route path="nearby" element={
                  <Suspense fallback='loading...'>
                    <LazyNearby/>
                  </Suspense>
                } />
                <Route path="contents" element={
                  <Suspense fallback='loading...'>
                    <LazyContents/>
                  </Suspense>
                } />
                <Route path="contactus" element={
                  <Suspense fallback='loading...'>
                    <LazyContactUs/>
                  </Suspense>
                } />
                <Route path="aboutWikipedia" element={
                  <Suspense fallback='loading...'>
                    <LazyAboutWikipedia/>
                  </Suspense>
                } />
                  <Route path="login" element={
                    <Suspense fallback='loading...'>
                      <LazyLogin>
                          <Route path="createaccount" element={
                              <Suspense fallback='loading...'>
                                  <LazyCreateAccount
                                  />
                              </Suspense>
                          } />
                      </LazyLogin>
                  </Suspense>
                    } />
            </Routes>
          </div>
           <Footer/>
        </div>
    </div>
  );
}

export default App;