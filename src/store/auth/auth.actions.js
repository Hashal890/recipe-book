import {
  Auth_LogIn_Error,
  Auth_LogIn_Loading,
  Auth_LogIn_Success,
  Auth_Logout,
  Auth_SignUp_Error,
  Auth_SignUp_Loading,
  Auth_SignUp_Success,
} from "./auth.types";

export const loginAPI = (creds) => async (dispatch) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
  if (!userDetails) return false;
  const { fName, lName, email, password } = userDetails;
  if (email === creds.email && password === creds.password) {
    dispatch({ type: Auth_LogIn_Loading });
    try {
      const res = {
        userToken: `${fName}-${lName}-${email}`,
        fName,
        lName,
        email,
        password,
      };
      dispatch({ type: Auth_LogIn_Success, payload: res });
      return true;
    } catch (err) {
      dispatch({ type: Auth_LogIn_Error });
    }
  } else return false;
};

export const logoutAPI = () => (dispatch) => {
  dispatch({ type: Auth_Logout });
};

export const signupAPI = (creds) => async (dispatch) => {
  const { fName, lName, email, password } = creds;
  localStorage.setItem("userDetails", JSON.stringify(creds));
  dispatch({ type: Auth_SignUp_Loading });
  try {
    const res = {
      userToken: `${fName}-${lName}-${email}`,
      fName,
      lName,
      email,
      password,
    };
    dispatch({ type: Auth_SignUp_Success, payload: res });
    return true;
  } catch (err) {
    dispatch({ type: Auth_SignUp_Error, payload: err.response });
  }
};
