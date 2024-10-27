import { useDispatch } from "react-redux";
import { useUiStore } from "../store/store";
import { toggleSideBar } from "../store/uiSlice";

export const useUiStoreHook = () => {
  const uiStore = useUiStore();
  const dispatch = useDispatch();

  const onToggleSidebar = () => {
    dispatch(toggleSideBar());
  };

  return {
    ...uiStore,
    onToggleSidebar,
  };
};
