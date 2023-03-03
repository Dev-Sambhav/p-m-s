import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import {
  SHOW_ALERT,
  CLEAR_ALERT,
  IS_AUTH_READY,
  TOGGLE_SIDEBAR,
  TOGGLE_USER,
  PAGE_TITLE
} from "./action";
import authReducer from "./reducer";

// init the context
export const AuthContext = createContext();

// state
export const initialState = {
  user: null,
  isAuthReady: false,
  toggleSidebar: false,
  toggleUser: false,
  alert: false,
  pageTitle: "Dashboard",
};

export const AuthContextProvider = ({ children }) => {
  // using reducer hook for handling multiple state
  const [state, dispatch] = useReducer(authReducer, initialState);

  // handleSidebarToggle
  const handleToggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  // handleUserToggle
  const handleToggleUser = () => {
    dispatch({ type: TOGGLE_USER });
  };

  // handle show alert
  const handleShowAlert = () => {
    dispatch({ type: SHOW_ALERT });
    handleClearAlert();
  };

  // handle clear alert
  const handleClearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  // handle change page title
  const handlePageTitle = (title) => {
    dispatch({type : PAGE_TITLE, payload : title});
  }

  // for preventing user information if user already login
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: IS_AUTH_READY, payload: user });
      unsub();
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        handleToggleSidebar,
        handleToggleUser,
        handleShowAlert,
        handlePageTitle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
