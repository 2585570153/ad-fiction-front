<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <router-link to="/" class="link">
        <el-menu-item index="0">
        <img src="/public/assets/logo.png"
             width="165"
             height="55"
        >
        </el-menu-item>
    </router-link>
    <router-link to="/" class="link"><el-menu-item index="1" >首页</el-menu-item></router-link>
    <router-link to="/category/nansheng/1" class="link"><el-menu-item index="2">分类</el-menu-item></router-link>
    <router-link to="/rankinglist/nansheng/1/collect" class="link"> <el-menu-item index="3">排行榜</el-menu-item></router-link>
    <router-link to="/bookrank" class="link"><el-menu-item index="4">书架</el-menu-item></router-link>
    <Search />
     <template v-if="userObj">
    <el-menu-item >
        <div class="navigation-user">
            <div class="navigation-user-name">{{userInfo.nickname}}</div>
            <el-dropdown @command="handleCommand">
                <span>
                <el-avatar
                        :src=userInfo.headportrait
                />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">个人中心</el-dropdown-item>
                        <el-dropdown-item divided command="b">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>

            </el-dropdown>
        </div>
    </el-menu-item>

     </template>
      <template v-else>
      <el-menu-item >
          <br>
          <el-button
                  type="primary"
                  class="register-btn"
                  @click="centerDialogVisible = true"
          >登录/注册
          </el-button>
      </el-menu-item>
      </template>
  </el-menu>



    <el-dialog
            v-model="centerDialogVisible"
            title="登录/注册"
            width="30%"
            align-center
    >

        <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="登录" name="first">
                <br>
                <img src="/public/assets/logo.png"
                     width="260"
                     height="70"
                >
                <br><br>
                <el-form :model="login" label-width="70px">
                    <el-form-item label="账号：">
                        <el-input v-model="login.username" placeholder="请输入用户" />
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input v-model="login.password"
                                  type="password"
                                  placeholder="请输入密码"
                                  show-password
                        />
                    </el-form-item>
                    <br><br>
                        <el-button type="primary" @click="loginbutton">登录</el-button>
                        <el-button  @click="centerDialogVisible = false">
                            关闭
                        </el-button>
                </el-form>




            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <br>
                <img src="/public/assets/logo.png"
                     width="260"
                     height="70"
                >
                <br><br>
                <el-form :model="register" label-width="70px">
                    <el-form-item label="名字：">
                        <el-input v-model="register.nickname" placeholder="请输入名字" />
                    </el-form-item>
                    <el-form-item label="账号：">
                        <el-input v-model="register.username" placeholder="请输入用户" />
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input v-model="register.password"
                                  placeholder="请输入密码"
                        />
                    </el-form-item>
                    <el-form-item label="邮箱：">
                        <el-input v-model="register.email" placeholder="请输入邮箱" />
                    </el-form-item>
                    <br><br>
                    <el-button type="primary" @click="registerbutton">注册</el-button>
                    <el-button  @click="centerDialogVisible = false">
                        关闭
                    </el-button>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <template #footer>
              <div class="navigation-footer">
                    <el-form-item>
                    <el-tooltip
                            content="请阅读并勾选下方协议"
                            placement="top-start"
                            :auto-close="1000"
                            :offset="10"
                    >
                      <el-checkbox
                              class-name="agreement"
                      />
                    </el-tooltip>

                    同意<a href="#" style="color: #30BAFCFF;">《用户协议》</a>和<a href="#" style="color: #30BAFCFF;"
                          >《隐私政策》</a
                          >
                  </el-form-item>
              </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
// import { ArrowDown } from '@element-plus/icons-vue'
import {ref, reactive, onMounted} from 'vue'
import Search from "./Search.vue";
import {UserRegisterAPI,UserInfoAPI,UserLogoutAPI} from '/src/apis/userAPI';
import {useUserStore} from "@/stores/userstore"
import {storeToRefs} from "pinia";
import router from "@/router";
const login = reactive({
    username: '',
    password: '',
})
const register = reactive({
    nickname: '',
    username: '',
    password: '',
    email: ''
})


const userStore = useUserStore()
const Registermsg = ref('')

const userInfo = ref({})


//提取本地的字符串
const userstring = localStorage.getItem('user');
// json字符串转化为json对象
var userObj = JSON.parse(userstring);



async function getUserInfo(){
    await userStore.getUserInfo(login.username,login.password)
}


const getUserRegister = async ()=>{
    const res = await UserRegisterAPI(register)
    Registermsg.value=res.msg
}
const getUserLogout = async ()=>{
    const res = await UserLogoutAPI()

}
const UserInfo = async ()=>{
    const res = await UserInfoAPI()
    userInfo.value=res.data
}
const Registermessage =()=>{
    ElMessage({
        message: Registermsg,
        type: 'success',
    });
}

const { usermsg } = storeToRefs(userStore);


const message =()=>{
    ElMessage({
        message: usermsg,
        type: 'success',
    });

}

const loginbutton =()=>{
    getUserInfo();
    message();
    centerDialogVisible.value= false;
    setTimeout(()=>{
        //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
        location.reload();
        //延迟时间：1秒
    },1000)

}
const registerbutton =()=>{
    getUserRegister();
    Registermessage();
    centerDialogVisible.value= false;
}
const handleCommand = (command: string | number | object) => {
    if (command === 'b'){
        getUserLogout()
        localStorage.removeItem('user');
        location.reload();
    }
}
const centerDialogVisible = ref(false)
const props = defineProps({
  navid:{
    type: String
  }
})
const activeIndex = ref(props.navid);
const activeName = ref('first')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
// 页面刷新
// location.reload();
onMounted(() => {
    UserInfo();
});
</script>

<style>
/* 导航样式 */
.el-menu--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: solid 1px var(--el-menu-border-color);
    border-right: none;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 6%;
}
/* 导航元素 */
.el-menu-item {
    display: flex;
    align-items: center;
    height: var(--el-menu-item-height);
    line-height: var(--el-menu-item-height);
    font-size: var(--el-menu-item-font-size);
    color: var(--el-menu-text-color);
    padding: 0 var(--el-menu-base-level-padding);
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration), color var(--el-transition-duration);
    box-sizing: border-box;
    white-space: nowrap;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 16px;
}
/* 导航实时小角标 */
.el-menu-item.is-active {
    color: var(--el-menu-active-color);
    text-decoration: underline;
    text-decoration-color: var(--el-menu-active-color);
    text-decoration-thickness: 4px; /* 你可以调整这个值来改变下划线的粗细 */
    text-underline-offset: 20px; /* 调整这个值来改变下划线的平移距离 */

}
.flex-grow {
  flex-grow: 1;

}
.flex-grow1{
  flex-grow: 0.2;
}
.link {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
.el-menu-demo {
    background-color: #F7F7F8; /* 修改背景颜色 */
    height: 70px;
}
.el-header{
    --el-header-height: 70px;
}
.navigation-footer{
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
.navigation-user{
    display: flex;
    margin-top: 5px;
}
.navigation-user-name{
    padding-right: 12px;
    font-size: 20px;
}
.el-icon--right{
    padding:5px;
}
</style>
