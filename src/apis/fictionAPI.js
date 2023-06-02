import request from "@/utils/http";



export function getFictionAPI(id){
    return request({
        url: '/fiction/fictionid',
        params: {
            id
        }
    })
}
export const getCategoryAPI = (params) => {
    return request({
        url: '/fiction/list',
        method: 'GET',
        params
    });
};
