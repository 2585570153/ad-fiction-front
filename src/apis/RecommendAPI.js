import request from "@/utils/http";



export function getRecommendAPI(id,bigclass){
    return request({
        url: '/recommend/random',
        params: {
            id,
            bigclass
        }
    })
}
export const getRecommendpageAPI = (params) => {
    return request({
        url: '/recommend/data',
        method: 'GET',
        params
    });
};