import request from "@/utils/http";



export function getcontentAPI(id,tableName){
    return request({
        url: '/chapter/content/contentid',
        params: {
            id,tableName
        },
        method: 'GET'
    })
}

export function getcontentTXTAPI(id,tableName){
    return request({
        url: '/chapter/content/contenttxt',
        params: {
            id,tableName
        },
        method: 'GET'
    })
}