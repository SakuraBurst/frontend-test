export const AUTH_LOGIN = "app/AUTH_LOGIN";
export const AUTH_LOGIN_SUCCESS = "app/AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAIL = "app/AUTH_LOGIN_FAIL";

export function authLoginAction(email) {
  return {
    type: AUTH_LOGIN,
    email
  };
}

export function authLoginSuccessAction(data) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    data
  };
}

export function authLoginFailAction(error) {
  return {
    type: AUTH_LOGIN_FAIL,
    error
  };
}
