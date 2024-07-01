import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type, disabled }) => {
  const classNames = className
    .split(' ')
    .map((name) => styles[name] || name)
    .join(' ');

  return (
    <button onClick={onClick} className={`${styles.button} ${classNames}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
