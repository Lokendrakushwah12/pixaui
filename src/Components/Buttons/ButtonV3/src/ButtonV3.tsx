import React, { useState, CSSProperties } from "react";
import { motion, Variants } from "framer-motion";

interface ButtonV3Props {
  title: string;
  borderRadius?: string;
  color?: string;
  padding?: string;
  className?: string;
  style?: CSSProperties;
}

const ButtonV3: React.FC<ButtonV3Props> = ({
  title = "ButtonV3",
  borderRadius = "8px",
  color = "#763afe",
  padding = "8px",
  className = "",
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default Values
  const BgcolorLight = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16,
  )}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`;

  const BgBlurColor = `radial-gradient(circle at 50% 100%, ${BgcolorLight} 18%, ${color})`;

  const starVariants1: Variants = {
    hover: {
      scale: [1, 0.8, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const starVariants2: Variants = {
    hover: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.15,
        delay: 0.15,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const starVariants3: Variants = {
    hover: {
      scale: [1, 1.3, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.3,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div
      className={`group relative flex h-16 w-fit cursor-pointer items-center justify-center ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 h-full w-full opacity-0 blur-[32px] transition-all duration-300 group-hover:opacity-50"
        style={{ background: BgBlurColor }}
      />
      <div
        className="z-30 overflow-hidden border border-[#8787870d] bg-[#8787871a] transition-all duration-300 group-hover:border-8"
        style={{ borderRadius: borderRadius }}
      >
        <div
          className="border-b border-[#00000022] bg-[#1d1d1d] transition-all duration-300 group-hover:brightness-95"
          style={{
            borderRadius: `calc(${borderRadius} - 1px)`,
            background: isHovered ? color : "#1d1d1d",
            boxShadow: "inset 0 0 0 0 rgba(255,255,255)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow =
              "inset 0px -2px 0px rgba(255,255,255, 0.1)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow =
              "inset 0 0 0 0 rgba(255,255,255, 0)")
          }
        >
          <div
            className="flex items-center justify-center gap-1 border-t border-[#ffffff60] p-3"
            style={{
              borderRadius: `calc(${borderRadius} - 1px)`,
              padding: padding,
            }}
          >
            <div className="absolute bottom-0 left-1/2 h-[30px] w-3/4 -translate-x-1/2 translate-y-0 rounded-full bg-[#fff] opacity-10 mix-blend-overlay blur-[14px] group-hover:opacity-25"></div>
            <h3
              className="bg-clip-text text-transparent transition-all duration-300 group-hover:text-[#ffffffda]"
              style={{
                backgroundImage: "linear-gradient(to right, #a1a1a1, #515151)",
              }}
            >
              {title}
            </h3>
            <div className="flex h-5 w-5 items-center justify-center text-[#ffffff80] transition-all duration-300 group-hover:text-[#ffffff]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M14.1814 6.60782L12.7063 2.47766C12.4693 1.81399 11.5307 1.814 11.2937 2.47766L9.81863 6.60782C9.61695 7.17253 9.17253 7.61695 8.60782 7.81863L4.47766 9.29369C3.81399 9.53072 3.814 10.4693 4.47766 10.7063L8.60782 12.1814C9.17253 12.383 9.61695 12.8275 9.81863 13.3922L11.2937 17.5223C11.5307 18.186 12.4693 18.186 12.7063 17.5223L14.1814 13.3922C14.383 12.8275 14.8275 12.383 15.3922 12.1814L19.5223 10.7063C20.186 10.4693 20.186 9.53072 19.5223 9.29369L15.3922 7.81863C14.8275 7.61695 14.383 7.17253 14.1814 6.60782Z"
                  fill="white"
                  fillOpacity="0.8"
                  variants={starVariants1}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                />
                <motion.path
                  d="M6.19071 15.5721L5.35576 13.0673C5.24179 12.7254 4.75821 12.7254 4.64424 13.0673L3.80929 15.5721C3.77197 15.6841 3.6841 15.772 3.57212 15.8093L1.06727 16.6442C0.725383 16.7582 0.725382 17.2418 1.06727 17.3558L3.57212 18.1907C3.6841 18.228 3.77197 18.3159 3.80929 18.4279L4.64424 20.9327C4.75821 21.2746 5.24179 21.2746 5.35576 20.9327L6.19071 18.4279C6.22803 18.3159 6.3159 18.228 6.42788 18.1907L8.93273 17.3558C9.27462 17.2418 9.27462 16.7582 8.93273 16.6442L6.42788 15.8093C6.3159 15.772 6.22803 15.6841 6.19071 15.5721Z"
                  fill="white"
                  fillOpacity="0.5"
                  variants={starVariants2}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                />
                <motion.path
                  d="M5.09535 1.78606L4.67788 0.533634C4.6209 0.362691 4.3791 0.362691 4.32212 0.533634L3.90465 1.78606C3.88598 1.84205 3.84205 1.88598 3.78606 1.90465L2.53363 2.32212C2.36269 2.3791 2.36269 2.6209 2.53363 2.67788L3.78606 3.09535C3.84205 3.11402 3.88598 3.15795 3.90465 3.21394L4.32212 4.46637C4.3791 4.63731 4.6209 4.63731 4.67788 4.46637L5.09535 3.21394C5.11402 3.15795 5.15795 3.11402 5.21394 3.09535L6.46637 2.67788C6.63731 2.6209 6.63731 2.3791 6.46637 2.32212L5.21394 1.90465C5.15795 1.88598 5.11402 1.84205 5.09535 1.78606Z"
                  fill="white"
                  fillOpacity="0.3"
                  variants={starVariants3}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonV3;