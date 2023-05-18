<template>
  <div class="chapter">
    <el-container>
      <el-aside width="850px">

        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane class="mulu"  name="first">
            <template #label>
              <span class="custom-tabs-label"><span>书籍详细</span></span>
            </template>
            <el-card shadow="never" class="box-card">
              <div class="card-header">
            <span class="pinlun">书友吧</span>
            <el-button class="button" text>快去评论吧 ></el-button>
              </div>
            </el-card>

            <div class="content">
              <div class="chapter-title1">第1章 重回大唐</div>
              <div class="chapter-text" >
                {{formattedText}}
              </div>
            </div>

          </el-tab-pane>

          <el-tab-pane class="mulu"  name="second">
            <template #label>
              <span class="custom-tabs-label"><span>目录</span></span>
            </template>
            <div class="title">

              <div class="chapter-item">元素1</div>
              <div class="chapter-item">元素2</div>
              <div class="chapter-item">元素3</div>
              <div class="chapter-item">元素4</div>
              <div class="chapter-item">元素5</div>
              <div class="chapter-item">元素6</div>

            </div>

          </el-tab-pane>
        </el-tabs>

      </el-aside>
      <el-main>

        <SideColumn />

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed} from 'vue'
import SideColumn from "/src/views/detail/components/SideColumn.vue";
const activeName = ref('first')
const originalText = ref(
    '“呼哧！！！“\\r\\n\\r\\n“我…不是死了吗？”\\r\\n\\r\\n龙江市，某别墅小区，一座独栋别墅，豪华的房间内，柔软的席梦思大床上，腾地坐立而起一位碎发过眼，高冷英俊的男子。\\r\\n\\r\\n他大口大口喘着气，满目惊疑不定环顾四周环境。\\r\\n\\r\\n“这里是…”\\r\\n\\r\\n当见这熟悉又陌生的房间，男子精神微微一震，伸手拿过床头柜上放着的手机打开观望。\\r\\n\\r\\n“28年4月1号？”\\r\\n\\r\\n望着手机上显示的日期，他整个人愣在床上，面露茫然的低声自语：“我这是穿越回来，还是做了一场梦？”\\r\\n\\r\\n他名唤顾长卿，今年二十六岁，手底下有一家市值近千亿的上市公司，因父母车祸双亡所继承。\\r\\n\\r\\n现在的他不知是做了一场梦，还是从灾变后穿越回来。\\r\\n\\r\\n梦中发生之事无比真实。\\r\\n\\r\\n六月一号零点整，一道照亮全球的闪电撕裂夜幕，其音震耳欲聋，宛若天崩。\\r\\n\\r\\n然后全球的动植物开始迅猛异变。\\r\\n\\r\\n哪怕是一只蚂蚁，在那道雷霆闪过之后，也在几个呼吸间变的比成年狼狗还要巨大。\\r\\n\\r\\n哪怕是院落中的一棵小草，也在迅速的生根发芽，顷刻间成长至数米高度。\\r\\n\\r\\n所有动植物发生翻天覆地的异变，且似乎都开启了灵智。\\r\\n\\r\\n专以人类为食，短短一夜之间。\\r\\n\\r\\n全球各国陷入暂时瘫痪，大半个月后才稍微恢复运转，大规模动用强大的武器对付异变的动植物。\\r\\n\\r\\n在此期间，无数人成为异变的怪物腹中之餐。\\r\\n\\r\\n然而，在这灾变时期，有这么一群强大的人类出现，他们身上刻的纹身觉醒，纵是一朵玫瑰花纹身，觉醒之后也可给宿主带来强大无比的力量。\\r\\n\\r\\n不过，真正强大的纹身，皆可化作拥有鬼神莫测之力的铠甲。\\r\\n\\r\\n人类称呼这些人为超纹者，有些加入国家共同对抗异变的动植物，有些因为忽然获得如此强大的力量，而在犯罪的路上走的越来越远。\\r\\n\\r\\n梦中，并无纹身的顾长卿，苟延残喘三年，最终不是死在怪物口中，而是死在那些狂徒手中。\\r\\n\\r\\n“嗯！这是！！”\\r\\n\\r\\n就在顾长卿怀疑是不是一场梦时，忽然看到掌心中熟悉的诡异印记。\\r\\n\\r\\n他记得这道印记，是在灾变开始那天，遭一团灰色的神秘火焰灼烧所致。\\r\\n\\r\\n“不是梦？！”\\r\\n\\r\\n顾长卿深邃的双眸内，闪烁着兴奋与疯狂的光芒。\\r\\n\\r\\n因为上一世，他未刻一个纹身，才导致沦为最底层的牲畜，受尽侮辱与践踏…\\r\\n\\r\\n在那个血与乱的灾变时期，普通人类只能被圈养在围墙之下充当劳工。\\r\\n\\r\\n虽然还有国家的束缚，但却只能束缚普通人，对那些超纹者根本没有影响。\\r\\n\\r\\n因为只有他们，能够对抗异变的怪物，与守护人类的城市。\\r\\n\\r\\n当即，拨打秘书电话。\\r\\n\\r\\n“您好董事长，请问有什么吩咐？”\\r\\n\\r\\n电话刚接通，便传出一道颇为动听的女音。\\r\\n\\r\\n顾长卿淡道：“给我把全球手艺最好的纹身师请来，价格随便他开，今晚七点内我要见到他人！”\\r\\n\\r\\n据他所知，灾变之前，身怀的纹身越真实，待觉醒之后所能带给宿主的力量则更强。\\r\\n\\r\\n同类型的纹身强弱，皆是看刻画的真实度。\\r\\n\\r\\n此外，同类型的纹身，还可相互吸收壮大。\\r\\n\\r\\n因此，灾变后超纹者之间，时常自相残杀。\\r\\n\\r\\n“好的董事长！您还有什么吩咐嘛？”\\r\\n\\r\\n“暂时没有。记住，我要的是全球最顶尖，无人能出其右的纹身大师，若为完成任务乱找，后果自负！”\\r\\n\\r\\n说到最后，顾长卿的声音变的极为森冷。\\r\\n\\r\\n这关乎着他灾变后，能否立于全球之巅的大事。\\r\\n\\r\\n如果她敢坏自己好事，灾变后他将第一个干掉这个女人。\\r\\n\\r\\n别怀疑他的性格，灾变时期苟延残喘的三年，让他的性格也变的极为黑暗。\\r\\n\\r\\n“董事长请放心，我一定给您请来全球最好的纹身大师！”\\r\\n\\r\\n电话里的女音，声音提高了己分保证道。\\r\\n\\r\\n顾长卿轻嗯了声，挂断通话。\\r\\n\\r\\n来到窗户前，望着晴空万里的天空，他知道也就现在能欣赏了。\\r\\n\\r\\n待六月一号凌晨到来，全球都将笼罩上一层厚重的雾霾。\\r\\n\\r\\n虽还分白天与黑夜，但天空却是死气沉沉的暮色，夜晚一轮血月高挂。\\r\\n\\r\\n“距离天地异变还剩两个月，应该来的及建造一座大型避难所！”\\r\\n\\r\\n顾长卿向浴室走去，之所以要建造大型避难所，是因为一旦异变降临，一株小草都将便的凶残无比。\\r\\n\\r\\n几乎很少有能让人类生存之地。\\r\\n\\r\\n因此，在不缺财力的情况下，打造一座坚不可摧的大型避难所，储藏足够多的物资，是必须要做的一件事情。\\r\\n\\r\\n半个小时左右，顾长卿沐浴出来，在巨大的落地镜子前止步。\\r\\n\\r\\n镜子内的是一道颀长身影，一米八出头，及一张棱角分明，不含半点瑕疵的英俊面孔。\\r\\n\\r\\n不挂半丝的身体，肌肉线条完美，多的不多，少的不少，无半点不协调。\\r\\n\\r\\n然这具身体，马上就将布满各种纹身。\\r\\n\\r\\n吹干头发，穿上一件黑色睡衣，顾长卿推门下楼。\\r\\n\\r\\n豪华的一楼大厅，一位正在打扫着卫生，看似三十六七岁的中年妇女，闻听脚步声传来，停下手中工作，转头望去道：\\r\\n\\r\\n“少爷，午餐准备好了，你现在要吃吗？！”\\r\\n\\r\\n顾长卿轻嗯一声回应，径直向餐厅走去。\\r\\n\\r\\n这个女人名王蓉。\\r\\n\\r\\n在顾长卿十岁那年，妈妈从外面找回来的保姆。\\r\\n\\r\\n到现在整整十五六年了，对顾长卿的饮食习惯等了如指掌。\\r\\n\\r\\n“少爷…下午…”\\r\\n\\r\\n端上午餐摆好的王荣，话都还未说完，便被顾长卿打断：“去吧！”\\r\\n\\r\\n王蓉诧异道：“呃！少爷，你怎知道我要说什么？”\\r\\n\\r\\n顾长卿端起桌上牛奶放到唇边轻泯半口，知道她那赌鬼丈夫欠下高利贷无礼偿还，如果按照原来的剧情发展，她丈夫被逼的跳楼而亡。\\r\\n\\r\\n王蓉为了她那个废物丈夫，在他这里都借了几十万。\\r\\n\\r\\n虽然对他而言都是小钱，但顾长卿认为，那种不知悔改的废物，死了也罢。\\r\\n\\r\\n“呃！那少爷，我先走了。”\\r\\n\\r\\n王蓉虽然很疑惑他为何会知道自己要请假。\\r\\n\\r\\n但也没有多问，拿上少爷给她买的家用车匆匆离开。');


const formattedText = computed(() => {
  // 在计算属性的函数体内进行计算
  // 这里假设你想要将空格替换为&nbsp;
  return originalText.value.replace(/\\r\\n\\r\\n/g, "\n");
  // /\r\n\r\n/g 这个是一会用的
});

</script>

<style lang="scss" >
.custom-tabs-label{
  font-size: 25px;
  font-weight: bold;
}
.custom-tabs-label:hover{
  color: $xtxColor;
}
.title{
  display: flex;
  flex-wrap: wrap;
}
.chapter-item {
  font-size: 15px;
  width: 400px;
  height: 30px;
  margin: 10px;
}
.chapter-item:hover{
  color: $xtxColor;
}
.box-card{
  margin-top:20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pinlun{
  font-size: 20px;
  font-weight: bold;
}
.content{
  margin-top:20px;
}
.chapter-title1{
  font-size:27px;
  font-weight: bold;
}
.chapter-text{
  width: 900px;
  margin-top:20px;
  line-height: 4;
  font-size: 17px;
  white-space: pre-wrap; /* 允许换行 */
}
</style>
