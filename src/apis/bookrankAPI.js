
import request from "@/utils/http";

export function getBookRankAPI(){
    return request({
        url: '/bookrank/read',
        method: 'GET',
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
    })
}
export function saveBookIdAPI(id){
    return request({
        url: '/bookrank/saveid',
        method: 'GET',
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        params: {
            id
        }
    })
}
export function deleteBookIdAPI(id){
    return request({
        url: '/bookrank/delete',
        method: 'DELETE',
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        params: {
            id
        }
    })
}
