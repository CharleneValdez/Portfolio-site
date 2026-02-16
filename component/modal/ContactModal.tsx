"use client";

import React from "react";
import styles from "../../style/ContactModal.module.css";

// Define the props type
interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  if (!show) return null; // don’t render if not active

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Contact Me</h3>
        <p>📞 +63 912 345 6789</p>
        <p>✉️ charlene@example.com</p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
