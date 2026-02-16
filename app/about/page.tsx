"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../style/About.module.css";

import { IoSchoolOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

import { Data, ModalItem } from "../types/data";
import JobModal from "@/component/modal/JobModal";
import useMediaQuery from "@/hooks/useMediaQuery";


export default function About() {
  const [data, setData] = useState<Data>({ education: [], experience: [] });
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 500px)");

  const handleOpenEducation = (id: number) => {
    const edu = data.education.find(item => item.id === id);
    setSelectedItem(edu || null);
  };

  const handleOpenExperience = (modalKey: string) => {
    const job = data.experience.find(item => item.modalKey === modalKey);
    setSelectedItem(job || null);
  };

  const closeModal = () => setSelectedItem(null);

  useEffect (() => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((result) => {
      setData(result);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching data", err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className={"loading"}> 
        loading data ...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <div className={styles.introContainer}>
          <div className={styles.introImg}>
            <div className={styles.img}></div>
          </div>

          <div className={styles.divider}></div> 

          <div className={styles.introText}>
            <h3> About Me</h3>
            <h1>I'm <span>Charlene</span>, A Front-End Developer from Bulacan</h1>
            <p>
              I build responsive web interfaces with React, JavaScript, and Bootstrap, 
              blending technical skill with design sensibility. 
              With experience in IT operations and a Cum Laude degree in Information Technology, 
              I bring efficiency, creativity, and attention to detail to every project.
            </p>

            <p>
              Let’s create something awesome.
            </p>

            <div className={ `${styles.buttonContainer} ctaContainer`} >
              <button
                className={"cta"}
                onClick={() => {
                  const el = document.getElementById("more-details");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className={"ctaText"}>More details</span>
              </button>
            </div>  
          </div>
        </div>
      </div>

      <div className={styles.moredetails} id="more-details">
        <h2>More Details About Me</h2>
        <p>
          I specialize in front-end development with React, focusing on clean code,
          scalable folder structures, and responsive design. I’m passionate about
          accessibility and creating user-friendly experiences.
        </p>

        <div className={styles.history}>
          <div className={styles.cardholder}>
            <h1> 
              <IoSchoolOutline className={styles.icon}/>
              EDUCATION
            </h1>
            
            {data.education.map((item) => ( 
            <section 
              key={item.id}  
              className={styles.experiencecard}
              role="button"
              onClick={() => {
                if (isMobile) handleOpenEducation(item.id);
              }}
            >
              <div className={styles.cardlogo}>
                <div className={styles.cardlogoimg}>
                  <Image
                    src={item.logo}
                    alt={`${item.school} Logo`}
                    fill
                  />
                </div>

              </div>

              <div className={styles.cardcontent}>
                <h3>{item.school}</h3>
                <div className={styles.data}> 
                <h4 className={styles.experienceRole}>{item.course}</h4>
                </div>
              </div>

              <div className={styles.viewbtn}>
                <CiLocationArrow1
                  className={styles.viewbtnIcon}
                  onClick={() => handleOpenEducation(item.id)}
                  aria-label="View education details"
                />
              </div>
            </section>   
            ))}                   
          </div>

          <div className={styles.cardholder}>
            <h1> 
              <MdWorkOutline className={styles.icon}/>
              WORK EXPERIENCE 
            </h1>
            
            {data.experience.map((item) => ( 
            <section 
              key={item.id}  
              className={styles.experiencecard}
              role="button"
              onClick={() => {
                if (isMobile && item.modalKey) handleOpenExperience(item.modalKey);
              }}
            >
              <div className={styles.cardlogo}>
                <div className={styles.cardlogoimg}>
                  <Image
                    src={item.logo}
                    alt={`${item.company} Logo`}
                    fill
                  />
                </div>
              </div>

              <div className={styles.cardcontent}>
                <h3>{item.company}</h3>
                <div className={styles.data}> 
                  <h4 className={styles.experienceRole}>{item.role}</h4>
                  <h4 className={styles.experienceDate}>• {item.dates}</h4>
                </div>
              </div>

              <div className={styles.viewbtn}>
                <CiLocationArrow1
                  className={styles.viewbtnIcon}
                  onClick={() => item.modalKey && handleOpenExperience(item.modalKey)}
                  aria-label="View work experience details"
                />
              </div>
            </section>   
            ))}         

            <JobModal isOpen={!!selectedItem} onClose={closeModal} item={selectedItem} />
          </div>
        </div>
      </div>
    </div>
  )
}
