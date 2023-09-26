import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDarkMode } from "./hooks/useDarkMode";
import { setDarkMode } from "../redux/slices/darkModeSlice";

interface DarkModeWrapperProps {
  children: ReactNode;
}

export default function DarkModeWrapper({ children }: DarkModeWrapperProps) {
  const darkMode = useDarkMode();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDarkMode = sessionStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode === "true"));
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return <>{children}</>;
}
