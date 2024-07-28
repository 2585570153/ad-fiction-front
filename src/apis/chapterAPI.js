import request from "@/utils/http";

export function getchapterAPI(id,tableName){
    return request({
        url: '/chapter/chapterid',
        params: {
            id,
            tableName
        }
    })
}
export function switchChapterAPI(type,chapterId,txt,tableName,fictionId){
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
            txt: txt,
            tableName: tableName,
            fictionId: fictionId
        })
    })
}

export function getchapterOneAPI(id,tableName){
    return request({
        url: '/chapter/one',
        params: {
            id,
            tableName
        }
    })
}