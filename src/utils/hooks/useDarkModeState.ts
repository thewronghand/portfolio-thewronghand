import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useDarkModeState = () => {
  return useSelector((state: RootState) => state.darkMode);
};
