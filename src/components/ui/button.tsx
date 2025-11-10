import React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }> = ({ children, className = "", ...props }) => {
  return (
    <button {...props} className={`px-4 py-2 bg-sky-600 text-white ${className}`}>
      {children}
    </button>
  );
};

export default Button;
