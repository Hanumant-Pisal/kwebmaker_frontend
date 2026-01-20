import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-full text-sm font-medium transition";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
