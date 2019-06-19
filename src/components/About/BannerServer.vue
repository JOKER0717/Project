<template>
  <div class="container_server">
    <div class="server-center">
      <div class="character">
        <h1>持续为客户提供优质的服务</h1>
        <p>舍南网络自成立以来，一直专注于互联网品牌建设，我们团队的成员曾务于国内优秀广告公司及互联网公司业务类型涉及 WEB 视觉、交互设计、移动终端用户体验等质量和信誉是 我们存在的基石。我们注重客户提出的每个要求，充分考虑每一个细节，积极的做好服务，努力开拓更好的视野。在所有新老客户面前我们都很乐意虚心、朴实的跟您接触，更深入 的了解您的企业，以便为您提供更优质的服务！</p>
      </div>
      <div class="img_left">
        <img src="../../assets/images/about/pic_cultrue1.jpg"
             alt="">
        <div class="mask"></div>
        <div class="border"></div>
      </div>
      <div class="img_right">
        <div class="img_top">
          <img src="../../assets/images/about/pic_cultrue2.jpg"
               alt="">
          <div class="mask1"></div>
          <div class="border1"></div>
        </div>
        <div class="img_bottom">
          <div class="hover1">
            <img class="firstpicture"
                 src="../../assets/images/about/pic_cultrue3.jpg"
                 alt="">
            <div class="mask2"></div>
            <div class="border2"></div>
          </div>
          <div class="hover2">
            <img class="secondpicture"
                 src="../../assets/images/about/pic_cultrue4.jpg"
                 alt="">
            <div class="mask3"></div>
            <div class="border3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container_server {
  height: 1000px;
  width: 100%;
  background: white;
}
.server-center {
  width: 1200px;
  height: 1000px;
  background: white;
  margin: 0 auto;
  overflow: hidden;
}
.character {
  width: 1200px;
  height: 145px;
  /* border: 1px red solid; */
  margin-top: 120px;
  position: relative;
}
.character h1 {
  font-size: 22px;
  color: #3b3b3c;
  display: block;
  margin-bottom: 20px;
  position: absolute;
  left: 0;
}
.character p {
  position: absolute;
  left: 0;
  top: 57px;
  font-size: 14px;
  color: #59595b;
  line-height: 30px;
  text-align: left;
}
.img_left {
  width: 580px;
  height: 650px;
  margin-top: 40px;
  float: left;
  position: relative;
}
.img_left > img {
  width: 100%;
  height: 100%;
}
.img_right {
  width: 590px;
  height: 650px;
  float: right;
  margin-top: 40px;
  position: relative;
}
.img_top > img {
  width: 100%;
}
.img_bottom {
  width: 590px;
  height: 290px;
  margin-top: 21px;
  position: relative;
}
.firstpicture {
  float: left;
}
.secondpicture {
  float: right;
  height: 290px;
}
.mask {
  width: 580px;
  height: 650px;
  background: rgba(0, 0, 0, 0.5);
  float: left;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.img_left:hover .border {
  width: 539px;
  height: 600px;
  border: 1px solid white;
  position: absolute;
  left: 20px;
  top: 22px;
  transition-duration: 2s;
}
.img_left:hover .mask {
  display: block;
}
.mask1 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.img_top:hover .border1 {
  width: 530px;
  height: 270px;
  border: 1px solid white;
  position: absolute;
  top: 35px;
  left: 29px;
}
.mask2 {
  width: 290px;
  height: 290px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.hover1:hover .border2 {
  width: 240px;
  height: 240px;
  border: 1px solid white;
  position: absolute;
  top: 28px;
  left: 26px;
}
.hover1:hover .mask2 {
  display: block;
}
.mask3 {
  width: 290px;
  height: 290px;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.hover2:hover .border3 {
  width: 240px;
  height: 240px;
  border: 1px solid white;
  position: absolute;
  top: 28px;
  right: 26px;
}
.hover2:hover .mask3 {
  display: block;
}
</style>

