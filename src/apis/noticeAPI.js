
import request from "@/utils/http";
export function getNotice(){
    return request({
        url: '/home/notice'
    })
}

