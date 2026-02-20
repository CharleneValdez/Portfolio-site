"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";   
import Image from "next/image";
import Link from "next/link";
import styles from '../style/Header.module.css';

import { GoHome } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";

import ContactModal from './modal/ContactModal';

function Header() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.appHeader} aria-label="Site header">
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          {/* <div className={styles.logoImg}></div> */}
          <div className={styles.logoImg}>
            <Image 
              src="/asset/image/logo.png" 
              alt="Charlene Mae Espanol Portfolio Logo" 
              width={130} 
              height={48} 
              priority
              className={styles.logoDesktop}
            />
            <Image 
              src="/asset/image/icon.png" 
              alt="Charlene Mae Espanol Portfolio Small Logo" 
              width={40} 
              height={40} 
              priority
              className={styles.logoMobile}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.navLinks} aria-label="Main navigation">
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

              {/* <li>
                  <Link 
                    href="/projects" 
                    className={`${styles.navTitleHolder} ${pathname === "/projects" ? styles.active : ""}`}
                  >
                    <FaFolderOpen className={styles.icon}/>
                    <span className={styles.navTitle}>Projects</span>
                  </Link>
              </li> */}
          </ul>
        </nav>
        
        {/* Profile + Contact */}
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
              aria-label="Open contact modal"
              onClick={() => setShowModal(true)} 
            />
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal show={showModal} onClose={() => setShowModal(false)}/>
    </header>
  );
}

export default Header;
