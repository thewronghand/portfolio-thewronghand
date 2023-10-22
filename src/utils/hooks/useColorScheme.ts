import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useColorScheme = () => {
  return useSelector((state: RootState) => state.colorScheme);
};
