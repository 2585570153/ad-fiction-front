<template>
  <div class="fiction-read-affix">
  <el-affix :offset="100">
    <div class="fiction-read-left">
      <router-link to="/" class="link">
        <svg-icon  iconName="icon-shouye" className="fiction-read-affix-ico"></svg-icon>
      <div class="fiction-read-affix-font">
        首页
      </div>
      </router-link>
    </div>
  </el-affix>
    <el-affix :offset="180">
      <div class="fiction-read-left">

        <router-link to="/" class="link">
          <svg-icon  iconName="icon-xiangxi" className="fiction-read-affix-ico"></svg-icon>
          <div class="fiction-read-affix-font">
            详细
          </div>
        </router-link>

      </div>
    </el-affix>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

.fiction-read-left{

  display: flex;
  background-color: #EDEAE1FF;
  box-shadow: 0 0 1px #a19e9e;
  float: right;
  width: 75px;
  height: 75px;
  margin-right: 8px;
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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
