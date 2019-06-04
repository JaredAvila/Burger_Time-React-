import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT,
    path
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
      apiKey;
    if (!isSignUp) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
        apiKey;
    }
    axios
      .post(url, authData)
      .then(res => {
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(err => {
        console.log("here's the error response object ", err.response);
        dispatch(authFail(err.response.data.error));
      });
  };
};
