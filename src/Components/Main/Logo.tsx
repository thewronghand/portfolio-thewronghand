import { motion } from "framer-motion";
import AnimatedText from "../../utils/AnimatedText";
import { useColorScheme } from "../../utils/hooks/useColorScheme";

interface LogoProps {
  width: string;
  height: string;
  strokeWidth?: string;
  animated?: boolean;
  vertical?: boolean;
}

export default function Logo({
  width,
  height,
  animated = false,
  strokeWidth = "300",
  vertical = false,
}: LogoProps) {
  const colorScheme = useColorScheme();
  const directionStyle = `${
    vertical ? "flex flex-col items-center" : "flex flex-row items-center"
  }`;
  if (animated) {
    return (
      <section className={`${directionStyle}`}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 2081 2946"
          fill="none"
          stroke={colorScheme.LIGHT.PRIMARY}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M150 1374V1905.49C150 2397.31 548.69 2796 1040.5 2796C1532.31 2796 1931 2397.31 1931 1905.49V887"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ strokeDasharray: "180% 250%", strokeDashoffset: "260%" }}
            animate={{ strokeDashoffset: "0%" }}
            transition={{ duration: 1, delay: 0 }}
          />
          <motion.path
            d="M599 507.747V1913.91C599 2158.07 796.89 2356 1041 2356C1285.11 2356 1483 2158.07 1483 1913.91V354"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ strokeDasharray: "180% 250%", strokeDashoffset: "190%" }}
            animate={{ strokeDashoffset: "0%" }}
            transition={{ duration: 1, delay: 0.35 }}
          />
          <motion.path
            d="M1041 150L1041 1920"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ strokeDasharray: "100%", strokeDashoffset: "100%" }}
            animate={{ strokeDashoffset: "0%" }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </svg>
        <section
          className={`cursor-default ${vertical ? "text-3xl mt-3" : ""}`}
        >
          <AnimatedText text="thewronghand" />
        </section>
      </section>
    );
  }
  return (
    <section className={`${directionStyle}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 2081 2946"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150 1374V1905.49C150 2397.31 548.69 2796 1040.5 2796C1532.31 2796 1931 2397.31 1931 1905.49V887"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M599 507.747V1913.91C599 2158.07 796.89 2356 1041 2356C1285.11 2356 1483 2158.07 1483 1913.91V354"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M1041 150L1041 1920"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
      <section
        className={` ${vertical ? "text-3xl mt-3" : "ml-1"} font-young-serif`}
      >
        thewronghand
      </section>
    </section>
  );
}
