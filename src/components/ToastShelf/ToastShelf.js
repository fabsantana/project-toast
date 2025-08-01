import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol role='region' aria-live='polite' aria-label='Notification' className={styles.wrapper}>
      {toasts.map(({ toastVariant, id, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={toastVariant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
