"use client";

import styles from "../../style/JobModal.module.css";
import Image from "next/image";

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
    <div className={styles.modalOverlay} role="dialog" aria-modal="true"> 
      <div className={styles.modalContent}>
        
        {/* Header */}
        <div className={styles.modalDetails}>
          <Image 
            src={item.logo} 
            alt={isExperience ? `${item.company} company logo` : `${item.school} university logo`}
            width={80} 
            height={80} 
          />
          <div className={styles.compDetails}>
            {isExperience ? (
              <>
                <h3>{item.role}</h3>
                <p>{item.exactDate || item.dates}</p>
              </>
            ) : (
              <>
                <h3>{item.school}</h3>
                <p>{item.course}</p>
              </>
            )}
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close job modal">
            <IoCloseCircleSharp size={35} />
          </button>
        </div>
        
        {/* Responsibilities */}
        {isExperience && item.responsibilities.length > 0 && (
          <div className={styles.modalTask}>
            <ul>
              {item.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {item.achievements?.length > 0 && (
          <div className={styles.modalTask}>
            <ul>
              {item.achievements!.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
