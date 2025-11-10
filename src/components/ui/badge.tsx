import React from "react";

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, className = "", ...props }) => (
  <span {...props} className={`inline-flex items-center px-2 py-0.5 text-xs rounded ${className}`}>{children}</span>
);

export default Badge;
