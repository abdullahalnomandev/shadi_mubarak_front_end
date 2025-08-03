import React from "react";

type ButtonVariant = "primary" | "secondary" | "cta" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  size = "md",
  loading = false,
  fullWidth = true,
  children,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  loadingText = "Saving...",
  ...rest
}) => {
  const baseStyles = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-medium",
    "rounded-lg",
    "border",
    "transition-all",
    "duration-300",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "disabled:transform-none",
    "cursor-pointer",
  ];

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs min-h-[32px]",
    md: "px-4 py-2.5 text-sm min-h-[40px]",
    lg: "px-6 py-3 text-base min-h-[48px]",
  };

  const variantStyles = {
    primary: [
      "text-white",
      "bg-gradient-to-r",
      "from-cyan-500",
      "to-blue-600",
      "border-transparent",
      "hover:from-blue-600",
      "hover:to-cyan-500",
      "hover:shadow-lg",
      "hover:scale-[1.02]",
      "focus:ring-blue-500",
      "active:scale-[0.98]",
    ],
    secondary: [
      "text-gray-700",
      "bg-white",
      "border-gray-300",
      "hover:bg-gray-50",
      "hover:border-gray-400",
      "hover:shadow-md",
      "hover:scale-[1.02]",
      "focus:ring-gray-500",
      "active:scale-[0.98]",
      "dark:text-gray-200",
      "dark:bg-gray-800",
      "dark:border-gray-600",
      "dark:hover:bg-gray-700",
    ],
    cta: [
      "text-white",
      "bg-gradient-to-r",
      "from-pink-500",
      "to-rose-500",
      "border-transparent",
      "hover:from-pink-600",
      "hover:to-rose-600",
      "hover:shadow-xl",
      "hover:scale-[1.02]",
      "focus:ring-pink-500",
      "active:scale-[0.98]",
      "shadow-lg",
    ],
    danger: [
      "text-white",
      "bg-gradient-to-r",
      "from-red-500",
      "to-red-600",
      "border-transparent",
      "hover:from-red-600",
      "hover:to-red-700",
      "hover:shadow-lg",
      "hover:scale-[1.02]",
      "focus:ring-red-500",
      "active:scale-[0.98]",
    ],
    outline: [
      "text-blue-600",
      "bg-transparent",
      "border-blue-600",
      "hover:bg-blue-50",
      "hover:border-blue-700",
      "hover:text-blue-700",
      "hover:shadow-md",
      "hover:scale-[1.02]",
      "focus:ring-blue-500",
      "active:scale-[0.98]",
      "dark:text-blue-400",
      "dark:border-blue-400",
      "dark:hover:bg-blue-900/20",
    ],
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto min-w-[120px]";

  const LoadingSpinner = () => (
    <svg
      className='animate-spin h-4 w-4'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'>
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );

  const buttonClasses = [
    ...baseStyles,
    sizeStyles[size],
    ...variantStyles[variant],
    widthStyles,
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <>
          <LoadingSpinner />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className='flex-shrink-0'>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className='flex-shrink-0'>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
