import api from "@/lib/axios";

const version = "v1";

export const registerByEmail = async (email: string, password: string, name: string) => {
    const response = await api.post(`/api/${version}/auth/register-by-email`, {
        email,
        password,
        name,
    });
    return response.data;
};

export const registerByGoogle = async (code: string) => {
    const response = await api.post(`/api/${version}/auth/register-by-google`, {
        code,
    });
    return response.data;
};

export const loginByEmail = async (email: string, password: string) => {
    const response = await api.post(`/api/${version}/auth/login-by-email`, {
        email,
        password,
    });
    return response.data;
};

export const verifyOtp = async (email: string, otp: string) => {
    const response = await api.post(`/api/${version}/auth/verify-otp`, {
        email,
        otp,
    });
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get(`/api/${version}/auth/profile`);
    return response.data.data;
};
