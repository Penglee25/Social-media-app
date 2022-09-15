import * as AuthApi from "../Api/AuthRequest.js";

export const logIn = (formData) => async (dispatch) => {
    
    dispatch({type: "AUTH_START"})
	try {
        const { data } = await AuthApi.logIn(formData);
    } catch (error) {
        console.log(error)
    }
};
