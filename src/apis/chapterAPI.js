import request from "@/utils/http";

export function getchapterAPI(id){
    return request({
        url: '/chapter/chapterid',
        params: {
            id
        }
    })
}
export function switchChapterAPI(type,chapterId,txt){
    return request({
        url: '/chapter/switch',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            type: type,
            chapterId: chapterId,
            txt: txt
        })
    })
}