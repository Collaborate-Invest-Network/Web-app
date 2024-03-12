import { API, handleApiError} from "./utils";

export const signIn = async (formData) => {
    try {
        const res = await API.post("http://127.0.0.1:4000/auth/login", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return { error: null, data: res.data};
    } catch (error) {
        return handleApiError(error);
    }
};

export const signUp = async (formData) => {
    try {
        const res = await API.post("", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { error: null, data: res.data};
    } catch (error){
        return {
            error: error.response.data.errors,
            data: null,
        };
    }
};

export const logout = async () => {
    try {
        const res = await API.post("", {
            headers: {
                "Content-Type": "application",
            },
        });
        return { error: null, data: res.data};
    } catch (error) {
        return handleApiError(error);
    }
};