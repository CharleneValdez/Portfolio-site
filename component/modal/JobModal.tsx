"use client";

import styles from "../../style/JobModal.module.css";
import { ModalItem} from "@/app/types/data";

import { IoCloseCircleSharp } from "react-icons/io5";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ModalItem | null;
}

export default function JobModal({ isOpen, onClose, item }: JobModalProps) {
  if (!isOpen || !item) return null;

  const isExperience = "company" in item;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        
        {/* Header */}
        <div className={styles.modalDetails}>
          <img src={item.logo} alt={isExperience ? item.company : item.school}/>
          <div className={styles.compDetails}>
            {isExperience ? (
              <>
                <h4>{item.role}</h4>
                <h3>{item.exactDate || item.dates}</h3>
              </>
            ) : (
              <>
                <h4>{item.school}</h4>
                <h3>{item.course}</h3>
              </>
            )}
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <IoCloseCircleSharp size={35} />
          </button>
        </div>
        
        {/* Responsibilities */}
        {isExperience && item.responsibilities && (
          <div className={styles.modalTask}>
              <ul>
                {item.responsibilities.map((task, i) => (
                  <li className={styles.taskList} key={i}>{task}</li>
                ))}
              </ul>
          </div>
        )}
        
        {/* Achievements*/}
        {"achievements" in item && item.achievements && (
          <div className={styles.modalTask}>
              <ul>
                 {item.achievements.map((ach, i) => (
                  <li className={styles.taskList} key={i}>{ach}</li>
                ))}
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}
