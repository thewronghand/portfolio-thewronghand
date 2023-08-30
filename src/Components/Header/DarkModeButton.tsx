import { useDispatch } from "react-redux";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";

export default function DarkModeButton() {
  const dispatch = useDispatch();
  const darkMode = useDarkMode();

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? "라이트모드" : "다크모드"}
    </button>
  );
}
