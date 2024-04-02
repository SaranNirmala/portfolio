// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils";
import { HashLink } from "react-router-hash-link";
export const Navbar =() => {
    const linkStyle= {
       fontSize: '25px',
       color: 'white',
        textDecoration:'none',
    }

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.topNav}>
            <Link className={styles.title} href="/">Portfolio
            </Link>
        <div className={styles.menu}>
          <img className={styles.hamBtn} src={menuOpen ? getImageUrl('nav/closeIcon.png'): getImageUrl('nav/menuIcon.png')} alt="hamburger-Button"
            onClick={() => setMenuOpen(!menuOpen)} /> 
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} >
                <li> <HashLink className={styles.linkstyle} style={linkStyle} to={'/'}>Home</HashLink> </li>
                <li> <HashLink className={styles.linkstyle} style={linkStyle} to={'/#about'} smooth>About</HashLink> </li>
                <li> <HashLink className={styles.linkstyle} style={linkStyle} to={'/#skills'}>Skills</HashLink></li>
                <li> <HashLink className={styles.linkstyle} style={linkStyle} to={'/'}>Projects</HashLink></li>
                <li> <HashLink className={styles.linkstyle} style={linkStyle} to={'/#contact'}>Contact</HashLink></li>
            </ul>

        </div>
        </nav>
    )
}