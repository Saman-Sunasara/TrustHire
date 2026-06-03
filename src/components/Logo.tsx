import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  theme?: "light" | "dark" | "gold";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 48,
  showText = false,
  theme = "light",
}) => {
  // Brand Colors
  const greenColor = "#1F2A22";
  const goldColor = "#C8A96B";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Shield - Left Half (Dark Green) */}
        <path
          d="M 60 16 
             C 42 16, 28 22, 26 25 
             C 24 50, 29 76, 60 98 
             L 60 90 
             C 34 70, 31 48, 31 28 
             C 33 26, 45 21, 60 21 Z"
          fill={greenColor}
        />

        {/* Shield - Right Half (Gold) */}
        <path
          d="M 60 16 
             C 78 16, 92 22, 94 25 
             C 96 50, 91 76, 60 98 
             L 60 90 
             C 86 70, 89 48, 89 28 
             C 87 26, 75 21, 60 21 Z"
          fill={goldColor}
        />

        {/* Checkmark - Left Part (Dark Green) */}
        <path
          d="M 42 58 
             L 54 70 
             L 60 63.5
             L 60 53.5
             L 52 46.5
             L 42 58 Z"
          fill={greenColor}
        />

        {/* Checkmark - Right Part (Gold) */}
        <path
          d="M 60 63.5 
             L 93 30.5
             L 88 25.5
             L 60 53.5
             L 60 63.5 Z"
          fill={goldColor}
        />
      </svg>
      {showText && (
        <span
          className={`font-sans font-bold tracking-tight text-xl ${
            theme === "dark" ? "text-[#F8F8F5]" : "text-[#1F2A22]"
          }`}
        >
          Trust<span className="text-[#C8A96B] font-medium">Hire</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
