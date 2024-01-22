import request from "@/utils/http";



export function getcontentAPI(id){
    return request({
        url: '/chapter/content/contentid',
        params: {
            id
        }
    })
}
export function getcontentTxtAPI(id){
    return request({
        url: '/chapter/content/contenttxt',
        params: {
            id
        }
    })    
}
