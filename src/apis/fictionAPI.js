import request from "@/utils/http";



export function getFictionAPI(id){
    return request({
        url: '/fiction/fictionid',
        params: {
            id
        }
    })
}
