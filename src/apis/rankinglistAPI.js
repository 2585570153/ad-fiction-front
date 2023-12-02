import request from "@/utils/http";

export const getfictioncollectAPI = (params) => {
    return request({
        url: '/fictiondto/fictioncollect',
        method: 'GET',
        params
    });
};
export const getfictionclickAPI = (params) => {
    return request({
        url: '/fictiondto/fictionclick',
        method: 'GET',
        params
    });
};
export const getclick = (id)=>{
    return request({
        url: '/fictiondto/click',
        method: 'GET',
        params: {
        id
    }
    })
}