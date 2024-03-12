import { ADMIN_API, handleApiError } from "../utils";

export const signIn = async (credential) => {
    try {
        const res = await ADMIN_API.post("/signin", credential);
        return { error: null, data: res.data};
    } catch (error) {
        return handleApiError(error);
    }
};

export const getServicePreferences = async () => {
    try {
        const res = await ADMIN_API.get("/preferences");
        return { error: null, data: res.data};
    } catch (error) {
        return handleApiError(error);
    }
};