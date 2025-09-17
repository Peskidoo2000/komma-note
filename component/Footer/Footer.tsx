import styles from './Footer.module.css';

export default function Footer() {
 
    return (
        <div className={`container text-white text-center p-3 mt-4 ${styles.footerContainer}`}>
             <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"> 
                <div className="col mb-3">
                     <img className="bi me-2" width="40" height="60" src="komma2.png" alt=" Komma logo"/>
                     <p className={`text-body-secondary ${styles.footerText}`}>© 2025</p> </div> 
                     <div className="col mb-3">
                        </div> 
                        <div className="col mb-3"> 
                            <h5>Process</h5> 
                            <ul className="nav flex-column"> 
                                <li className={`nav-item mb-2`}>
                                    <a href="#" className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Home</a></li> 
                                    <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Analyze</span></li> 
                                    <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Create structure</span></li> 
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Prototyping</span></li>
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Design & Testing</span></li> 
                                    </ul> 
                        </div> 
                        <div className="col mb-3"> 
                            <h5>Contents</h5> 
                            <ul className="nav flex-column"> 
                                 <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Logo & Mark</span></li> 
                                    <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Colors</span></li> 
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Typography</span></li>
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Allignment</span></li> 
                                    </ul> 
                         </div> 
                        <div className="col mb-3"> 
                            <h5>Technology</h5> 
                            <ul className="nav flex-column"> 
                                 <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Desktop</span></li> 
                                    <li className="nav-item mb-2"><span className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Tablet</span></li> 
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Mobile</span></li>
                                    <li className="nav-item mb-2"><span  className={`nav-link p-0 text-body-secondary ${styles.footerText2}`}>Badges</span></li> 
                                    </ul> 
                     </div>
                      </footer>
                 </div>
    );
}