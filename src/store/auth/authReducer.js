import {
  Auth_LogIn_Error,
  Auth_LogIn_Loading,
  Auth_LogIn_Success,
  Auth_Logout,
  Auth_SignUp_Error,
  Auth_SignUp_Loading,
  Auth_SignUp_Success,
} from "./auth.types";

const userToken = localStorage.getItem("userToken") || null;

const initAuth = {
  loading: false,
  error: false,
  isRegistered: false,
  isAuthanticated: false,
  userToken: userToken,
  message: null,
  fName: null,
  lName: null,
  email: null,
  password: null,
};

const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case Auth_SignUp_Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Auth_SignUp_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case Auth_SignUp_Success: {
      const { userToken, fName, lName, email, password } = payload;
      localStorage.setItem("userToken", userToken);
      return {
        ...state,
        loading: false,
        error: false,
        isAuthanticated: true,
        userToken: userToken,
        fName: fName,
        lName: lName,
        email: email,
        password: password,
      };
    }
    case Auth_LogIn_Loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Auth_LogIn_Error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case Auth_LogIn_Success: {
      const { userToken, fName, lName, email, password } = payload;
      localStorage.setItem("userToken", userToken);
      return {
        ...state,
        loading: false,
        error: false,
        isAuthanticated: true,
        userToken: userToken,
        fName: fName,
        lName: lName,
        email: email,
        password: password,
      };
    }
    case Auth_Logout: {
      localStorage.removeItem("userToken");
      return {
        ...state,
        loading: false,
        error: false,
        isAuthanticated: false,
        userToken: null,
        fName: null,
        lName: null,
        email: null,
        password: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
