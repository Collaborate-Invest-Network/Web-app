import * as api from "../api/adminAPI"
import * as types from "../constants/adminConstants"

export const signInAction = (credential) => async(dispatch) => {
    try {
        const {error, data } = await api.signIn(credential);
        if (error) {
            throw Error(error);
        }
        localStorage.setItem("admin", JSON.stringify(data));
        dispatch({
            type : types.SIGN_IN_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: types.SIGN_IN_FAIL,
            payload: error.message,
        });
    }
};

export const logoutAction = () => async (dispatch) => {
    try {
        localStorage.removeItem("admin");
        dispatch({
            type: types.LOGOUT_SUCCESS,
        });
    } catch (error) {}
};