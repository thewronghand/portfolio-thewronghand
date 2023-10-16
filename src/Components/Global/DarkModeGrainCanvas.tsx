import { useEffect } from "react";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { useGrain } from "../../utils/hooks/useGrain";

export default function DarkModeGrainCanvas() {
  const darkMode = useDarkMode();
  const canvasRef = useGrain();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }
  }, [darkMode, canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen opacity-5 z-50 pointer-events-none"
    />
  );
}
