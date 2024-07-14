import request from "@/utils/http";

export const UserLoginAPI = (params) => {
    return request({
        url: '/user/login',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    });
};
export const UserRegisterAPI = (params) => {
    return request({
        url: '/user/register',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    });
};
export const UserLogoutAPI = () => {
    return request({
        url: '/user/logout',
        method: 'GET',
    });
};
export const UserInfoAPI = () => {
    return request({
        url: '/user/info',
        method: 'GET',
    });
};
export const UserUpdateAPI = (params) => {
    return request({
        url: '/user/update',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    });
};
export const UserPasswordAPI = (params) => {
    return request({
        url: '/user/password',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    });
};