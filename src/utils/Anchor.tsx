import { useColorScheme } from "./hooks/useColorScheme";
import { useDarkMode } from "./hooks/useDarkMode";

interface AnchorProp {
  children: string;
  href: string;
}

export default function Anchor({ children, href }: AnchorProp) {
  const colorScheme = useColorScheme();
  const darkMode = useDarkMode();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: darkMode ? colorScheme.DARK.PRIMARY : colorScheme.LIGHT.PRIMARY,
      }}
    >
      {children}
    </a>
  );
}
