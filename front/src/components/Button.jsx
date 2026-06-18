import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({
  text = "Get Started",
  icon = true,
  secondary = false,
  className = "",
}) => {
  return (
    <button
      className={`
      group relative overflow-hidden
      px-8 py-4 rounded-full
      font-medium tracking-wide
      transition-all duration-500
      flex items-center gap-3
      shadow-lg hover:shadow-2xl
      hover:scale-105

      ${
        secondary
          ? "border-2 border-primary text-primary bg-white hover:text-white"
          : "bg-primary text-white"
      }

      ${className}
      `}
    >
      {/* Animated Background */}
      <span
        className="
        absolute inset-0
        bg-gradient-to-r
        from-sage
        to-primary
        translate-y-full
        group-hover:translate-y-0
        transition-all duration-500
      "
      ></span>

      {/* Text */}
      <span className="relative z-10">
        {text}
      </span>

      {icon && (
        <ArrowRight
          size={18}
          className="
          relative z-10
          transition-transform duration-300
          group-hover:translate-x-2
        "
        />
      )}
    </button>
  );
};

export default Button;