import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex items-center bg-white text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-sm shadow-md hover:bg-gray-50 hover:border-gray-400 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;