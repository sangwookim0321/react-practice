import React from 'react';
import Button from '../../atoms/button';
import Add from '../../../assets/icons/Add';
import styles from './index.module.css';
import { useClassNames } from '../../../hooks/useClassNames';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick, className = '', type, disabled }) => {
  const classNames = useClassNames(className, styles);

  return (
    <Button onClick={onClick} className={classNames} type={type} disabled={disabled}>
      <Add />
      {children}
    </Button>
  );
};

export default IconButton;
