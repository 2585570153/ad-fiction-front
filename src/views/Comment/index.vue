<template>

  <div class="detail">
    <el-container>
      <el-header class="header">
        <div class="affix-container">
          <el-affix target=".affix-container" :offset="0">
            <navigation navid="0"/>
          </el-affix>
        </div>
      </el-header>
      <el-main class="bodymain">
        <p class="fiction-detail-p">首页 > 书评区</p>
        <Home :fictionData="fictionData" />
        <div style="height: 20px;"/>
        <div class="comment-list">
          <div v-if="!comments || comments.length === 0" class="comment-list-no">暂无评论</div>
          <div v-for="comment in comments" :key="comment.id" class="comment" v-else>
            <img :src="comment.headPortrait" alt="头像" class="comment-avatar" />
            <div class="comment-details">
              <p class="comment-author">{{ comment.nickname }}</p>
              <p class="comment-time">{{ formatDate(comment.commentTime) }}</p>
              <div style="height: 15px;"/>
              <p class="comment-content">{{ comment.content }}</p>
            </div>
          </div>
        </div>
        <template v-if="userObj">
          <div style="height: 20px;"/>
          <div class="comment">
              <img :src="userObj.data.headPortrait" alt="头像" class="comment-avatar" />
              <div class="comment-details">
                <p class="comment-author">{{userObj.data.nickname}}</p>
                <el-input
                  v-model="textarea"
                  style="width: 100%"
                  :rows="4"
                  type="textarea"
                  placeholder="Please input"
                />
              </div>
          </div>
          <div style="text-align: right;">
            <el-button type="primary" round @click="saveComment">评论</el-button>
          </div>
      </template>
      </el-main>
        <el-footer class="fiction-footer">
            <fictionfooter />
        </el-footer>
    </el-container>
  </div>


</template>

<script setup>

import Navigation from "@/views/Layout/components/Navigation.vue";
import {ref,onMounted} from "vue";
import Fictionfooter from "@/components/fictionfooter.vue";
import Home from "@/views/Comment/components/Home.vue";
import { getFictionAPI } from '/src/apis/fictionAPI';
import { getCommentAPI,addCommentAPI } from '/src/apis/commentAPI.js';
import Storage from "responsive-storage";
import {useRoute} from "vue-router";
const route = useRoute();
const fictionData = ref({});
const textarea = ref('');
function created(){
  window.scrollTo(0, 0);
}
const comments = ref([]);
var userObj = Storage.get("fiction_userInfo");
const saveComment = async ()=>{
    const res = await addCommentAPI({fictionId:route.params.id,content:textarea.value})
    if(res.code==1){
      getComment();
      ElMessage({
        message: res.msg,
        type: 'success',
    });
    textarea.value = '';
    }else{
      ElMessage({
        message: res.msg,
        type: 'error',
    });
    }
}
const getComment = async () =>{
  const res = await getCommentAPI(route.params.id,1,10);
  comments.value = res.data;
}
const getFiction = async () =>{
  const  res = await getFictionAPI(route.params.id)
  fictionData.value = res.data
  document.title = res.data.name+"-fiction中文网,小说,小说网,最新热门小说,阅读网站";
}
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
onMounted(() => {
  created();
  getFiction();
  getComment();
});

</script>

<style scoped >
.affix-container {
  text-align: center;
  /*设置导航固定的隐藏宽度*/
  max-height: 1000px;

  border-radius: 1px;
}
.el-main{
    min-height: 520px;
}
.bodymain{

  padding: 30px 159px;
  background-repeat: no-repeat;
}
.header{
  padding: 0;
}
.fiction-detail-p{
  font-size: 14px;
  margin: 0px;
  transform: translateY(-15px);
}
.fiction-footer{
    height: 250px;
    padding: 0;
}
.comment-list {
  margin-top: 20px;
}

.comment {
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px 0;
}

.comment-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-details {
  flex: 1;
}

.comment-author {
  font-weight: bold;
  margin: 0;
}

.comment-time {
  font-size: 12px;
  color: #888;
  margin: 0;
}

.comment-content {
  margin-top: 5px;
}
.comment-list-no{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #6b778c;
}
</style>
