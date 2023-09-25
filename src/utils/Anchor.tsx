import { useDarkMode } from "./hooks/useDarkMode";

interface AnchorProp {
  children: string;
  href: string;
}

export default function Anchor({ children, href }: AnchorProp) {
  const darkMode = useDarkMode();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        darkMode
          ? "text-purple-300 hover:text-purple-200"
          : "text-purple-400 hover:text-purple-500"
      }
    >
      {children}
    </a>
  );
}
