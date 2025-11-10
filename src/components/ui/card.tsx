import React from "react";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div {...props} className={`bg-white border ${className}`}>{children}</div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div {...props} className={`px-4 py-3 border-b ${className}`}>{children}</div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div {...props} className={`p-4 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div {...props} className={`font-semibold ${className}`}>{children}</div>
);

export default Card;
