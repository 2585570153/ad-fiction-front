import httpInstance from "@/utils/http";
export function getBanner(){
    return httpInstance({
        url: '/home/banner'
    })
}

