import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  IS_AUTH_READY,
  TOGGLE_SIDEBAR,
  TOGGLE_USER,
  SHOW_ALERT,
  CLEAR_ALERT,
} from "./action";

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthReady: true,
        toggleSidebar: false,
        toggleUser: false,
      };
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        isAuthReady: true,
        toggleSidebar: false,
        toggleUser: false,
      };
    case LOGOUT:
      return { ...state, user: null };
    case IS_AUTH_READY:
      return {
        ...state,
        user: action.payload,
        isAuthReady: true,
        toggleSidebar: false,
        toggleUser: false,
      };
    case TOGGLE_SIDEBAR:
      return { ...state, toggleSidebar: !state.toggleSidebar };
    case TOGGLE_USER:
      return { ...state, toggleUser: !state.toggleUser };
    case SHOW_ALERT:
      return { ...state, alert: true };
    case CLEAR_ALERT:
      return { ...state, alert: false };
    default:
      return state;
  }
};

export default authReducer;
