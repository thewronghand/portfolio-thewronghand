import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../redux/slices/darkModeSlice";
import { RootState } from "../../redux/store";

export const useDarkModeWithStorage = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode);
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

  return darkMode;
};
