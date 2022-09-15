import * as AuthApi from "../Api/AuthRequest.js";

export const logIn = (formData) => async (dispatch) => {
    
    dispatch.
	try {
        const { data } = await AuthApi.logIn(formData);
    } catch (error) {
        
    }
};
