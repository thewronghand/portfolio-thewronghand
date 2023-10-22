import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDarkMode } from "./hooks/useDarkMode";
import { setDarkMode } from "../redux/slices/darkModeSlice";
import { setColorScheme } from "../redux/slices/colorSchemeSlice";
import { COLOR_SCHEMES } from "./constant";
import { useColorScheme } from "./hooks/useColorScheme";

interface AppSettingsWrapperProps {
  children: ReactNode;
}

export default function AppSettingsWrapper({
  children,
}: AppSettingsWrapperProps) {
  const darkMode = useDarkMode();
  const currentColorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDarkMode = sessionStorage.getItem("darkMode");
    const savedColorScheme = sessionStorage.getItem("colorScheme") as
      | keyof typeof COLOR_SCHEMES
      | null;
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode === "true"));
    }
    if (savedColorScheme && COLOR_SCHEMES[savedColorScheme]) {
      dispatch(setColorScheme(COLOR_SCHEMES[savedColorScheme]));
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const savedColorSchemeName = Object.keys(COLOR_SCHEMES).find(
      (key) =>
        COLOR_SCHEMES[key as keyof typeof COLOR_SCHEMES] === currentColorScheme
    );
    if (savedColorSchemeName) {
      sessionStorage.setItem("colorScheme", savedColorSchemeName);
    }
  }, [currentColorScheme]);

  return <>{children}</>;
}
