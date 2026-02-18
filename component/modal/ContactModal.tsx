"use client";

import React from "react";
import styles from "../../style/ContactModal.module.css";
import { FaWhatsapp, FaViber } from "react-icons/fa";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  if (!show) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label); 
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Contact Me</h3>

        <div className={styles.contact}>
          {/* WhatsApp */}
          <div className={styles.contactIcons}>
            <FaWhatsapp color="#25D366" size={32} />
            <span
              className={styles.copyText}
              onClick={() => copyToClipboard("+63 917 876 0219", "whatsapp")}
            >
              +63 917 876 0219 (Viber)
              {copied === "whatsapp" && (
                <span className={styles.copiedMsg}> Copied!</span>
              )}
            </span>
          </div>

          {/* Viber */}
          <div className={styles.contactIcons}>
            <FaViber color="#665CAC" size={32} />
            <span
              className={styles.copyText}
              onClick={() => copyToClipboard("+63 917 876 0219", "viber")}
            >
              +63 917 876 0219 (Viber)
              {copied === "viber" && (
                <span className={styles.copiedMsg}> Copied!</span>
              )}
            </span>
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
