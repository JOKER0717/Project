<template>
  <div class="container_c">
    <div class="container_center">
      <div class="character">
        <h1>帮助客户成长，就是帮助公司和自己成长</h1>
        <p>我们认真服务好每一位客户,让客户满意是我们的宗旨！我们是设计师、工程师、梦想者！</p>
        <p>
          我们服务的客户有：中煤集团、凤凰网、华清宫、中能北气集团、西安铁路公安处、百跃羊乳集团、西北民航集团、俄罗斯列宾美院、韩国三只熊、合德堂控股集团、西安工程技师学院、鑫科塑业集团、陕西美术基金会、陕西美食协会、西北工业大学、陕西教育协会、百年健康药业、自力中药集团、西玛电机、广播电视大学、威孚石油集团、亚玄建设集团、糖果装饰、西安博迪教育集团、陕西金控集团、非凡士机器人、唐荣园艺股份集团、亿杰控股集团、亚成微电子股份、陕西无线电信息中心、陕西省能源化工研究院等。累计服务客户1200余家</p>
      </div>
      <ul class="icon-box">
        <!-- <div class="msk"> -->
        <li v-for="item in imgurl">
          <img :src="item"
               alt="">
        </li>
        <!-- </div> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgurl: [
        require("../../assets/images/about/logo_customer1.jpg"),
        require("../../assets/images/about/logo_customer2.jpg"),
        require("../../assets/images/about/logo_customer3.jpg"),
        require("../../assets/images/about/logo_customer4.jpg"),
        require("../../assets/images/about/logo_customer5.jpg"),
        require("../../assets/images/about/logo_customer6.jpg"),
        require("../../assets/images/about/logo_customer7.jpg"),
        require("../../assets/images/about/logo_customer8.jpg")
      ]
    };
  }
};
</script>

<style scoped>
.container_c {
  width: 100%;
  height: 100%;
}
.container_center {
  width: 1366px;
  height: 626px;
  background: #f5f5f7;
  margin: 0 auto;
  overflow: hidden;
}
.character {
  width: 1200px;
  height: 200px;
  margin: 60px auto;
  position: relative;
}
.character h1 {
  text-align: left;
  font-size: 22px;
  color: #3b3b3c;
  display: block;
  margin-bottom: 20px;
}
.character p {
  font-size: 14px;
  color: #59595b;
  line-height: 30px;
  text-align: left;
}
.icon-box {
  width: 1245px;
  height: 350px;
  margin: -40px auto;
}
.icon-box li {
  width: 260px;
  height: 160px;
  float: left;
  margin: 0 25px;
}
.icon-box li > img {
  -webkit-filter: grayscale(1);
  opacity: 0.7;
  transition: all 1s ease-out 0s;
}
.icon-box li:hover > img {
  -webkit-filter: none;
  transform: translate(0, -12px);
  transition-duration: 0.5s;
  box-shadow: -3px -3px 6px #888888;
}
</style>
