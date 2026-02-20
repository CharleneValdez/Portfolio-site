"use client";

import React from "react";
import styles from "../../style/ContactModal.module.css";
import useClipboard from "@/hooks/useClipboard";
import { FaWhatsapp, FaViber } from "react-icons/fa";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  const { copied, copyToClipboard } = useClipboard();

  if (!show) return null;

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalContent}>
        <h2>Contact Me</h2>

        <div className={styles.contact}>
          <address>
            {/* WhatsApp */}
            <div className={styles.contactIcons}>
              <FaWhatsapp color="#25D366" size={32} />
               <FaViber color="#665CAC" size={32} />
              <a
                href="tel:+639178760219"
                className={styles.copyText}
                onClick={(e) => {
                  e.preventDefault(); 
                  copyToClipboard("+63 917 876 0219", "contact");
                  window.location.href = "tel:+639178760219"; 
                }}
              >
                +63 917 876 0219
              </a>
              {copied === "contact" && (
                <span className={styles.copiedMsg} aria-live="polite">Copied!</span>
              )}
            </div>
          </address>
        </div>

        <button onClick={onClose} className={styles.closeButton} aria-label="Close contact modal">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
