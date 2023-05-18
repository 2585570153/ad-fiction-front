import request from "@/utils/http";



export function getcontentAPI(id){
    return request({
        url: '/chapter/content/contentid',
        params: {
            id
        }
    })
}
