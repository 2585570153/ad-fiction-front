import request from "@/utils/http";
export const searchAPI = (params) => {
    return request({
        url: '/search/data',
        method: 'POST',
        params
    });
};
