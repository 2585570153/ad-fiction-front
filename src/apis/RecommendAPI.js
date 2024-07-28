import request from "@/utils/http";



export function getRecommendAPI(count,bigclass){
    return request({
        url: '/fiction/random',
        params: {
            count,
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