

<script setup>
import {useReadStore} from "@/stores/readstores"
import {storeToRefs} from "pinia";
const ReadStore = useReadStore();
let { readid } = storeToRefs(ReadStore);

</script>
<template>

        <el-affix :offset="100">
            <div class="fiction-read-left">
                <router-link to="/" class="link">
                    <svg-icon  iconName="icon-book" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        首页
                    </div>
                </router-link>
            </div>
        </el-affix>
        <el-affix :offset="180">
            <div class="fiction-read-left">

                <router-link :to="'/detail/'+readid" class="link">
                    <svg-icon  iconName="icon-book2" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        详细
                    </div>
                </router-link>

            </div>
        </el-affix>
        <el-affix :offset="260">
            <div class="fiction-read-left">

                <router-link to="#" class="link">
                    <svg-icon  iconName="icon-menu" className="fiction-read-affix-ico" color="#57584b"></svg-icon>
                    <div class="fiction-read-affix-font">
                        目录
                    </div>
                </router-link>

            </div>
        </el-affix>


</template>
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
