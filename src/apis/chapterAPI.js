import request from "@/utils/http";

export function getchapterAPI(id){
    return request({
        url: '/chapter/chapterid',
        params: {
            id
        }
    })
}
