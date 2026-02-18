"use client";

import React from "react";
import styles from "../../style/ContactModal.module.css";

import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  if (!show) return null; 

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Contact Me</h3>

        <div className={styles.contactIcons}>
          <a href="https://wa.me/639178760219" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp color="#25D366" size={32} />
            <span>+63 917 876 0219(WhatsApp)</span>
          </a>

          <div className={styles.contactIcons}>
            <FaViber color="#665CAC" size={32} />
            <span>+63 917 876 0219(Viber)</span>
          </div>
        </div>

        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
