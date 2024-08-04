
import request from "@/utils/http";


// 获取评论列表
export function getCommentAPI(id,page,size){
    return request({
        url: '/comment/id',
        method: 'GET',
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        params: {
            id,
            size,
            page
        }
    })
}

export const addCommentAPI = (params) => {
    return request({
        url: '/comment/add',
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(params)
    });
};

