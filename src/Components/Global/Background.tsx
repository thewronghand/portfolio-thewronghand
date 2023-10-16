import { ReactNode } from "react";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { useColorScheme } from "../../utils/hooks/useColorScheme";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const darkMode = useDarkMode();
  const colorScheme = useColorScheme();
  return (
    <div
      style={{
        color: darkMode ? colorScheme.DARK.TEXT : colorScheme.LIGHT.TEXT,
        background: darkMode ? colorScheme.DARK.BG : colorScheme.LIGHT.BG,
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}
