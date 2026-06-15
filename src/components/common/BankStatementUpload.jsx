import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './Icon';
import './BankStatementUpload.css';

const isPdfFile = (file) =>
  file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

export function BankStatementUpload({ visible, onClose, onSubmit, autoOpenPicker, bankName }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  useEffect(() => {
    if (visible && autoOpenPicker && inputRef.current) {
      inputRef.current.click();
    }
  }, [visible, autoOpenPicker]);

  useEffect(() => {
    if (!visible) {
      setError('');
      setDragOver(false);
      setFiles([]);
    }
  }, [visible]);

  const addFiles = (incomingFiles) => {
    const newFiles = Array.from(incomingFiles || []);
    if (newFiles.length === 0) return;

    const accepted = newFiles.filter(isPdfFile);
    const rejected = newFiles.filter((file) => !isPdfFile(file));

    if (rejected.length > 0) {
      setError('Only PDF files are accepted. Please select PDF bank statements.');
    } else {
      setError('');
    }

    if (accepted.length > 0) {
      setFiles((prev) => {
        const merged = [...prev, ...accepted];
        return merged.filter(
          (file, index) =>
            merged.findIndex((item) => item.name === file.name && item.size === file.size) === index
        );
      });
    }
  };

  const handleFileChange = (event) => {
    addFiles(event.target.files);
    event.target.value = '';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addFiles(event.dataTransfer.files);
    setDragOver(false);
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setError('');
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      setError('Select at least one PDF file before uploading.');
      return;
    }
    if (error) return;
    onSubmit(files);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') onClose();
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bsu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="bsu-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bsu-title"
            aria-describedby="bsu-desc"
            tabIndex={-1}
            ref={modalRef}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              className="bsu-close"
              onClick={onClose}
              aria-label="Close upload dialog"
            >
              <Icon name="X" size={14} />
            </button>

            <div className="bsu-header">
              <div>
                <div id="bsu-title" className="bsu-title">Bank Statement Requirements</div>
                {bankName && <div className="bsu-bank-name">for {bankName}</div>}
                <p id="bsu-desc" className="bsu-desc">
                  Upload bank statements in PDF format. Multiple files are allowed if statements are split by month.
                </p>
              </div>
              <div className="bsu-note">
                <span className="bsu-note-icon">⚠️</span>
                <span>At least 3 months of bank statements are required for assessment and lender matching.</span>
              </div>
            </div>

            <div
              className={`bsu-dropzone${dragOver ? ' drag-over' : ''}`}
              onDrop={handleDrop}
              onDragOver={(event) => {
                event.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onClick={() => inputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => event.key === 'Enter' && inputRef.current?.click()}
            >
              <Icon name="Upload" size={24} className="bsu-drop-icon" />
              <div className="bsu-drop-title">Click or drag PDF files here to upload</div>
              <div className="bsu-drop-sub">Accepts PDF only, multiple files supported.</div>
              <div className="bsu-drop-action">Choose files</div>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,application/pdf"
                multiple
                onChange={handleFileChange}
                className="bsu-file-input"
              />
            </div>

            <div className="bsu-requirements">
              <div className="bsu-requirement-title">Bank Statement Requirements</div>
              <ul className="bsu-requirement-list">
                <li>Upload bank statements in PDF format.</li>
                <li>Minimum of 3 months of transaction history is required.</li>
                <li>Multiple PDF files may be uploaded if statements are split by month.</li>
              </ul>
            </div>

            {files.length > 0 && (
              <div className="bsu-file-list" aria-live="polite">
                {files.map((file, index) => (
                  <div key={`${file.name}-${file.size}-${index}`} className="bsu-file-item">
                    <div>
                      <div className="bsu-file-name">{file.name}</div>
                      <div className="bsu-file-meta">{Math.round(file.size / 1024)} KB</div>
                    </div>
                    <button
                      type="button"
                      className="bsu-file-remove"
                      onClick={() => handleRemoveFile(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            {error && <div className="bsu-error" role="alert">{error}</div>}

            <div className="bsu-actions">
              <button
                type="button"
                className="bsu-btn-primary"
                onClick={handleSubmit}
                disabled={files.length === 0}
              >
                Upload Statements
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
