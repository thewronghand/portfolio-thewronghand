import { useEffect } from "react";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { useGrain } from "../../utils/hooks/useGrain";
import { grainCanvas } from "./GlobalComponents.css";

export default function DarkModeGrainCanvas() {
  const darkMode = useDarkMode();
  const canvasRef = useGrain();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }
  }, [darkMode, canvasRef]);

  return <canvas ref={canvasRef} className={grainCanvas} />;
}
