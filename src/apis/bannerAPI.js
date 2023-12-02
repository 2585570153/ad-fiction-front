
import request from "@/utils/http";
export function getBanner(){
    return request({
        url: '/home/banner'
    })
}

