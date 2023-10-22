import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);
    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}
