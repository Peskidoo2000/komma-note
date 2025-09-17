import { InsertEmoticonRounded } from '@mui/icons-material';
import CustomAvartar from '../Avartar';
import styles from './Header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <nav className={` container navbar  navbar-expand-sm  ${styles.navar}`} aria-label="Third navbar example"> 
        <div className={`container-fluid ${styles.navbarContainer}`}> 
            <div className={`navbar-brand ${styles.navbarBrand}`}>
                <img src="../../komma2.png" alt="comma-logo" className={styles.kommaLogo}/>
                <p style={{color:"white"}}> Komma</p>
            </div> 
            <button className={`navbar-toggler`}
            type="button" data-bs-toggle="collapse"  
            data-bs-target="#navbarsExample03" aria-controls="navbarsExample03"
             aria-expanded="false" aria-label="Toggle navigation"> 
             <span className={`navbar-toggler-icon ${styles.navbarToggler}`} style={{color:"yellow"}} ></span> </button> 
             <div className="collapse navbar-collapse" id="navbarsExample03"> 
                <ul className={`navbar-nav me-auto mb-2 mb-sm-0 ${styles.navbarNavar}`}>
                    <li className={`nav-item ${styles.navItem}`}> 
                        <CustomAvartar/>
                    </li> 
                    <li className={`nav-item bg-dark ${styles.headerContainer}`}> 
                        <Link className={`nav-link active" aria-current="page ${styles.navLink}`} href="../../home">Home</Link> </li>
                    <li className={`nav-item bg-dark ${styles.headerContainer}`}> 
                        <Link className={`nav-link active" aria-current="page ${styles.navLink}`} href="../../about">About</Link> </li> 
                </ul>
            </div>
           </div> 
        </nav>
    )
}