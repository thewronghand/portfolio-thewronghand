import { useDispatch } from "react-redux";
import { useDarkModeState } from "../../utils/hooks/useDarkModeState";
import { toggleDarkMode } from "../../redux/slices/darkModeSlice";

export default function DarkModeButton() {
  const dispatch = useDispatch();
  const darkMode = useDarkModeState();

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? "라이트모드" : "다크모드"}
    </button>
  );
}
