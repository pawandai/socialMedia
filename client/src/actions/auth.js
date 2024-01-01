import { AUTH } from "../constants/index";
import * as api from "../axios/axios.service";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
