"use client";
import { ModalItem} from "@/app/types/data";
import styles from "../../style/JobModal.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
// import { Education, Experience } from "@/app/types/data";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ModalItem | null;
}

export default function JobModal({ isOpen, onClose, item }: JobModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalDetails}>
          <img src={item.logo} alt="Logo" />
          <div className={styles.compDetails}>
            {"company" in item ? (
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
        
        {"responsibilities" in item && item.responsibilities && (
          <div className={styles.modalTask}>
              <ul>
                {item.responsibilities.map((task, i) => (
                  <li className={styles.taskList} key={i}>{task}</li>
                ))}
              </ul>
          </div>
        )}

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
