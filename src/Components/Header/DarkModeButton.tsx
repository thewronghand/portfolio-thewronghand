import { useDispatch } from "react-redux";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeButton() {
  const dispatch = useDispatch();
  const darkMode = useDarkMode();

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </button>
  );
}
