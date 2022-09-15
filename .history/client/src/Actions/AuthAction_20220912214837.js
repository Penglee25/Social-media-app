import * as AuthApi from "../Api/AuthRequest.js";

export const logIn = (formData) => async (dispatch) => {
    
    dispatch({type: "AUTH"})
	try {
        const { data } = await AuthApi.logIn(formData);
    } catch (error) {
        
    }
};
