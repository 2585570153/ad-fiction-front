<template>
    <div class="common-layout-category">
      <el-container>
        <el-aside class="fiction-cateagory-my-aside" width="208px">
            <el-menu
                default-active="activeMenu"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
            > 
                <el-menu-item index="1">
                <el-icon><User /></el-icon>
                    个人信息
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon><Finished /></el-icon>
                    修改密码
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon><ChatSquare /></el-icon>
                    公告信息
                </el-menu-item>
            </el-menu>
          
        </el-aside>
  
        <el-main class="fiction-cateagory-my-main" >
            <div v-if="activeMenu === '1'">
                个人信息
                <el-divider />
                <el-form :model="userInfo" label-width="200px">
                    <el-form-item label="头像">
                        <el-upload
                            class="avatar-uploader"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload"
                            >
                            <img v-if="previewImage" :src="previewImage" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="昵称">
                        <el-input v-model="userInfo.nickname"></el-input>
                    </el-form-item>

                    <el-form-item label="用户名">
                        <el-input v-model="userInfo.username" disabled></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="userInfo.email"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-select v-model="userInfo.gender" placeholder="请选择性别">
                        <el-option label="男" value="0"></el-option>
                        <el-option label="女" value="1"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="手机号">
                        <el-input v-model="userInfo.phone"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="saveInfo">保存</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div v-if="activeMenu === '2'">
                修改密码
                <el-divider />
                <div class="only-height" />
                <el-form :model="passwordForm" label-width="200px" >
                <el-form-item label="新密码">
                    <el-input v-model="passwordForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input v-model="passwordForm.isPassword" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handlePasswordChange()">提交</el-button>
                </el-form-item>
                </el-form>
                <div class="only-height" />
                <div style="display: flex; padding-left: 3%">
                <div style="color: red; flex: 1; margin-right: 20px">
                    <p><strong>修改密码声明：</strong></p>
                    <p>1. 请确保您处于安全的网络环境下进行密码修改。</p>
                    <p>2. 请不要向任何人透露您的密码。</p>
                    <p>3. 系统不会以任何形式索要您的密码，请警惕诈骗信息。</p>
                    <p>4. 密码应包含字母、数字和特殊字符，以增强安全性。</p>
                </div>
                <div style="color: red; flex: 1">
                    <p><strong>修改密码注意事项：</strong></p>
                    <p>1. 请确保新密码与旧密码不同。</p>
                    <p>2. 请牢记新密码，避免遗忘。</p>
                    <p>3. 如有任何问题，请及时联系客服或管理员。</p>
                </div>
                </div>
            </div>
            <div v-if="activeMenu === '3'">
                公告信息
                <el-divider />
                <div class="announcement-container">
                    <p>暂无公告</p>
                </div>
            </div>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted,ref,reactive} from 'vue'
  import {
  User,
  Finished,
  ChatSquare
} from '@element-plus/icons-vue'
  import {UserInfoAPI,UserUpdateAPI,UserPasswordAPI} from '/src/apis/userAPI';
  const previewImage = ref(''); // 预览图片的Base64格式数据

  const activeMenu = ref('1')
  const userInfo = ref({
      nickname: '',
      username: '',
      email: '',
      headPortrait: '',
      gender: '',
      phone: '',
    });
  const passwordForm = reactive({
    password: '',
    isPassword: ''
})
const UserInfo = async ()=>{
    const res = await UserInfoAPI()
    userInfo.value=res.data
    previewImage.value=res.data.headPortrait;
}
  const handleOpen = (key: string, keyPath: string[]) => {
   }
  const handleClose = (key: string, keyPath: string[]) => {
  }
  const handleSelect=(key: string, keyPath: string[])=> {
      activeMenu.value = key;
    }
const handlePasswordChange = () => {
    if (passwordForm.password !== passwordForm.isPassword) {
        ElMessage({
            message: '两次输入的密码不一致',
            type: 'error',
        });
        return;
    }

    UserPasswordAPI(passwordForm).then(res => {
        if (res.code == 1) {
            ElMessage({message: res.msg,type: 'success',});
        } else {
            ElMessage({message: res.msg,type: 'error',});

        }
        }).catch(error => {
        console.error('API error:', error);
    });
}

const beforeAvatarUpload = (file) => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
        ElMessage({
            message: '上传头像图片只能是 JPG 或 PNG 格式!',
            type: 'error',
        });
    }
    if (!isLt2M) {
        ElMessage({
            message: '上传头像图片大小不能超过 2MB!',
            type: 'error',
        });
    }
    if(isJPG && isLt2M){
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => {
                console.log(reader.result)
                userInfo.value.headPortrait = reader.result;
                previewImage.value = reader.result; // 设置预览图片的Base64格式数据
            };        
    }
    
    return false;
};
const saveInfo = () => {
    UserUpdateAPI(userInfo.value).then(res => {
        if (res.code == 1) {
            ElMessage({message: res.msg,type: 'success',});
            setTimeout(function() {location.reload();}, 2000); // 延迟2秒刷新页面
        } else {
            ElMessage({message: res.msg,type: 'error',});

        }
        }).catch(error => {
        console.error('API error:', error);
    });
    };
  onMounted(() => {
    UserInfo();
  });

  </script>
  
  <style scoped lang="scss">
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .fiction-cateagory-my-aside {
    border-right: 1px solid #d3d3d3;
  }
  .fiction-cateagory-my-main{
    font-size: 20px;
    font-weight: bold;
    padding: 0 0 0 50px;
  }
  .el-menu-item {
    display: flex;
    align-items: center;
    height: var(--el-menu-item-height);
    line-height: var(--el-menu-item-height);
    font-size: 13px !important;
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
    justify-content: center;
}
.el-main {
    --el-main-padding: 20px;
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: var(--el-main-padding);
    min-height: 520px;
}
.el-form {
    --el-form-label-font-size: var(--el-font-size-base);
    width: 800px;
}
.announcement-container {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
    color: #6b778c;
}
.avatar {
  width: 130px;
  height: 130px;
  display: block;
  border-radius: 50%; /* 设置圆形 */
}
.only-height {
  height: 30px; /* 设置你想要的高度值 */
}
p{
    
  font-size: 14px;
  font-weight: bold;
}
</style>