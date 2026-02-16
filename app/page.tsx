"use client";

import styles from "../style/Home.module.css"
import Head from "next/head";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { FaFolderOpen } from "react-icons/fa";

export default function Home() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./asset/doc/Charlene Espanol - CV.pdf";
    link.download = "Charlene Espanol - CV.pdf"
    link.click();
  }

  return (
    <>      
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.introText}>
            
            <h1>Hello, I'm Charlene</h1>
            <h1>Ui/Ux Designer</h1>
            <h1>Based in Philippines</h1>

            <p>
              Detail-oriented Front-End Developer with experience in building responsive web interfaces, 
              UI/UX design, and IT operations. Skilled in optimizing user experience, streamlining
              workflows, and collaborating across teams to deliver high-quality solutions.
            </p>

            <div className={"ctaContainer"}>
              <button
                className={"cta"}
                onClick={handleDownload} 
              >
                <HiDownload className={"ctaIcon"}/> 
                <span className={"ctaText"}>Download CV</span>
              </button>
            </div>
            
          </div>

          <div className={styles.introImg}>
            <div className={styles.img}></div>
          </div>
        </div>

        <div className={styles.socialHolder}>
          <a 
            href="https://linkedin.com/in/CharleneEspanol" 
            target="_blank" 
            rel="noopener noreferrer"
          > 
            <button className={styles.socialButton}> 
              <FaLinkedinIn className={styles.buttonIcon}/>
              <span>LinkedIn</span>
            </button>
          
          </a>

          <a
            href="https://github.com/Kekingkyawz19/Portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.socialButton}> 
              <FaGithub className={styles.buttonIcon}/>
              <span>GitHub</span>
            </button>
          </a>

          <button className={styles.socialButton}> 
            <FaFolderOpen className={styles.buttonIcon}/>
            <span>Portfolio Live Site</span>
          </button>

          <a href="mailto:charleve.valdez19@gmail.com">
            <button className={styles.socialButton}> 
              <GoPaperAirplane className={styles.buttonIcon}/>
              <span>Email Me</span>
            </button>
          </a>

        </div>

      </div>
    </>

  )
}
