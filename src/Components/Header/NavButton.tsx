import { motion, MotionProps } from "framer-motion";

interface PathProps extends MotionProps {
  d?: string;
  stroke?: string;
}

function Path(props: PathProps) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );
}

interface NavButtonProps {
  toggle: () => void;
  isOpen: boolean;
  darkMode: boolean;
}

export default function NavButton({ toggle, isOpen }: NavButtonProps) {
  const currentState = isOpen ? "open" : "closed";

  return (
    <button onClick={toggle} className="mt-1">
      <svg width="30" height="30" viewBox="0 0 23 23">
        <Path
          initial={currentState}
          animate={currentState}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          initial={currentState}
          animate={currentState}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          initial={currentState}
          animate={currentState}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
