import { useColorScheme } from "./hooks/useColorScheme";

interface AnchorProp {
  children: string;
  href: string;
}

export default function Anchor({ children, href }: AnchorProp) {
  const colorScheme = useColorScheme();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: colorScheme.LIGHT.PRIMARY,
      }}
    >
      {children}
    </a>
  );
}
