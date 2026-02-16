"use client";

import styles from '../style/Header.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";   
import { GoHome } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { useState } from "react";
import ContactModal from './modal/ContactModal';

function Header() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.appHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}></div>
        <nav className={styles.navLinks}>
          <ul>
              <li>
                  <Link 
                    href="/" 
                    className={`${styles.navTitleHolder} ${pathname === "/" ? styles.active : ""}`}
                  >
                    <GoHome className={styles.icon}/>
                    <span className={styles.navTitle}>Home</span>
                  </Link>
              </li>

              <li>
                  <Link 
                    href="/about" 
                    className={`${styles.navTitleHolder} ${pathname === "/about" ? styles.active : ""}`}
                  >
                    <IoPersonCircleOutline className={styles.icon}/>
                    <span className={styles.navTitle}>About Me</span>
                  </Link>
              </li>

              <li>
                  <Link 
                    href="/skills" 
                    className={`${styles.navTitleHolder} ${pathname === "/skills" ? styles.active : ""}`}
                  >
                    <FaCode className={styles.icon}/>
                    <span className={styles.navTitle}>Skills</span>
                  </Link>
              </li>

              <li>
                  <Link 
                    href="/projects" 
                    className={`${styles.navTitleHolder} ${pathname === "/projects" ? styles.active : ""}`}
                  >
                    <FaFolderOpen className={styles.icon}/>
                    <span className={styles.navTitle}>Projects</span>
                  </Link>
              </li>
          </ul>
        </nav>
        
        <div className={styles.profileHolder}>
            <div className={styles.profileDetails}>
                <div className={styles.profile}>
                    <span className={styles.name}>Charlene Mae Espanol</span>
                    <span className={styles.role}>Front-End Developer</span>
                </div>
            </div>
            <div className={styles.line}></div>
            <LuMessageSquare 
              className={styles.messageIcon}
              onClick={() => setShowModal(true)} 
            />
        </div>
      </div>

      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}

export default Header;
