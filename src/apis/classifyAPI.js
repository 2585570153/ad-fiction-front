import request from "@/utils/http";

export function getclassifyAPI(type,bigClass){
    return request({
        url: '/classify/data',
        params: {
            type,
            bigClass
        }
    })
}