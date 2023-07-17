<template>


        <el-affix :offset="240">
            <div class="fiction-read-right">
                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-shelf" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        加入书架
                    </div>
                </router-link>
            </div>
        </el-affix>

        <el-affix :offset="320">
            <div class="fiction-read-right">
                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-A" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        &nbsp;&nbsp;字号
                    </div>
                </router-link>
            </div>
        </el-affix>


        <el-affix :offset="400">
            <div class="fiction-read-right">
                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-bright" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        &nbsp;&nbsp;背景
                    </div>
                </router-link>
            </div>
        </el-affix>
        <el-affix :offset="480">
            <div class="fiction-read-right">
                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-back" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        &nbsp;上一页
                    </div>
                </router-link>
            </div>
        </el-affix>
        <el-affix :offset="560">
            <div class="fiction-read-right">
                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-forward" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        &nbsp;下一页
                    </div>
                </router-link>
            </div>
        </el-affix>

</template>

<script setup>

</script>

<style scoped lang="scss">

.fiction-read-right{
  display: flex;
  background-color: #EDEAE1FF;
  box-shadow: 0 0 1px #a19e9e;
  float: left;
  width: 75px;
  height: 75px;
  margin-left: 8px;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
}
.fiction-read-affix-font{
  font-size: 15px;
  color: #626262;

}
.fiction-read-affix-font:hover{
  color: $xtxColor;
}
.fiction-read-affix-ico{
    padding-left: 12px;
    padding-right: 12px;
    width: 30px;
    height: 30px;


}

</style>