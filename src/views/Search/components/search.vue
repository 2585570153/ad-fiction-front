<template>
    <div class="search">

        <div class="searchbar">
            <input type="text"
                   id="searchMsg"
                   v-model="input2"
                   @keyup.enter="handleEnter"
            >
            <span id="btn"
                  @click="searchBooks"
            >搜索书籍</span>
        </div>
        <ul class="search-ul" id="list">
            <li class="search-li"></li>
        </ul>
    </div>
</template>

<script setup>
import { ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
const input2 = ref('')


function handleEnter() {
    const newRoute = {
        path: `/search/${input2.value}/1`// 新的路由路径，将 currentPage 作为路径的一部分
    };
    router.push(newRoute);
}
function searchBooks(){
    const newRoute = {
        path: `/search/${input2.value}/1`// 新的路由路径，将 currentPage 作为路径的一部分
    };
    router.push(newRoute);
}
</script>

<style scoped>
.search{
    display: flex;
    justify-content: center;

}

.search-li{
    list-style: none;
    padding: 3px;
}
#searchMsg{
    width: 540px;
    height: 34px;
    vertical-align: top;
    font-size: 14px;
    padding-left: 3px;
}
.search-li:hover {
    background-color: rgb(168, 213, 252);
    cursor: default;
}
.search-ul .search-li:first-child{
    margin-top: 0;
}
.search-ul{
    border: 1px solid #b6b6b6;
    border-top: 0px;
    display: none;
}
#btn{
    color: #fff;
    line-height: 38px;
    padding: 0 8px;
    font-size:14px;
    display: inline-block;
    height: 38px;
    background: #3385ff;
    cursor: pointer;
}
.searchbar{
    font-size: 0;
}

</style>