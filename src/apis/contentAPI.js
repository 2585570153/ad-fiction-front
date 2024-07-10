import request from "@/utils/http";



export function getcontentAPI(id){
    return request({
        url: '/chapter/content/contentid',
        params: {
            id
        },
        method: 'GET'
    })
}

export function getcontentTXTAPI(id){
    return request({
        url: '/chapter/content/contenttxt',
        params: {
            id
        },
        method: 'GET'
    })
}