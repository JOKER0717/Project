<template>
  <div>
    <div class="last-container">
      <div class="last-center">
        <div class="button">网站建设知识</div>
        <div class="left">
          <img src="../../assets/images/news/1-1P30G343490-L.jpg"
               alt=""
               class="image">
          <div class="fontbox">
            <span class="span1">网站建设应该选择什么样</span>
            <span class="span2">03.07.2018</span>
          </div>
          <p>企业网站建好以后，很多客户在面临选择空间时遇到了难题。空间选小了影响网站浏览，选大了又造成浪费。而且很多客户都不懂这方面的猫腻，小编为大家讲解下网站建设应该选择什么样的空间会比较好？</p>
        </div>
        <ul class="right">
          <li v-for="item in contentlists"
              class="childli">
            <div class="imagebox">
              <img :src="item.image"
                   alt=""
                   class="img">
            </div>
            <div class="imgright">
              <p class="one">{{item.title}}</p>
              <p class="two">{{item.dates}}</p>
              <p class="three">{{item.texts}}</p>
            </div>
          </li>
        </ul>
        <div class="hoverbox">
          <a href="#"
             class="btn">MORE+</a></div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentlists: [
        {
          image: require("../../assets/images/news/1-1P30G340430-L.jpg"),
          title: "网站建设中导航设计是至",
          dates: "03.07.2018",
          texts:
            "导航是一个优秀网站的支撑，如果你的网站内容非常的有趣同时视觉设计也非常受人欢迎，一个可用性强的导航栏务必会给人一个更好的用户体验。可用和易用一直是网站建设进行网站..."
        },
        {
          image: require("../../assets/images/news/1-1P30G339490-L.jpg"),
          title: "建设网站对企业有哪些好",
          dates: "03.07.2018",
          texts:
            "什么是网站？ 网站就是在互联网上一块固定的面向全世界发布消息的地方。它由域名（也就是网站地址）和网站空间构成。衡量一个网站的性能通常从网站空间大小、网站位置、网站连..."
        },
        {
          image: require("../../assets/images/news/1-1P30G335450-L.jpg"),
          title: "网站建设是动态的好还是静态",
          dates: "03.07.2018",
          texts:
            "一、百度对动态网页的识别 目前百度对动态网页的识别已经做得非常好，跟静态网页已经没有任务差别不会影响SEO的排名，官方文档均有介绍但是在使用动态网页技术时也是有许多需要..."
        }
      ]
    };
  }
};
</script>

<style scoped>
.last-container {
  width: 100%;
  height: 750px;
  overflow: hidden;
  background: #f6f6f6;
}
.last-center {
  width: 1200px;
  height: 100%;
  background: #f6f6f6;
  margin: 0 auto;
}
.left {
  width: 540px;
  height: 490px;
  float: left;
  background: white;
}
.right {
  width: 630px;
  height: 500px;
  float: right;
  margin-top: -30px;
}
.image {
  width: 540px;
  height: 360px;
}
.fontbox {
  width: 540px;
  height: 30px;
}
.span1 {
  display: block;
  text-align: left;
  float: left;
  font-size: 18px;
  padding-top: 10px;
}
.span2 {
  display: block;
  text-align: right;
  padding-top: 8px;
  float: right;
  font-size: 12px;
  color: #888888;
  font-weight: normal;
  padding-top: 10px;
}
.left p {
  text-align: left;
  color: #555555;
  line-height: 22px;
  margin-top: 10px;
  padding: 10px;
}
.button {
  width: 205px;
  height: 52px;
  margin: 40px auto;
  text-align: center;
  background-color: #ff4101;
  color: #fff;
  line-height: 52px;
  font-size: 22px;
  font-weight: 900;
}
.childli {
  width: 630px;
  height: 150px;
  margin-top: 30px;
  background: white;
  position: relative;
}
.imagebox {
  width: 165px;
  height: 110px;
  float: left;
  overflow: hidden;
  margin: 20px 23px 13px 10px;
}
.imagebox > .img {
  width: 100%;
  height: 100%;
}
.imagebox:hover .img {
  transform: scale(1.2);
  transition-duration: 2s;
}
.imgright {
  width: 370px;
  height: 130px;
  position: absolute;
  right: 30px;
  top: 3px;
  padding-top: 15px;
}
.imgright > p {
  text-align: left;
}
.one {
  font-size: 16px;
}
.two {
  font-size: 12px;
  color: #888888;
  padding: 8px 0;
}
.three {
  color: #555555;
  line-height: 22px;
}
.childli:hover .one {
  color: #ff4101;
}
.hoverbox {
  width: 178px;
  height: 38px;
  margin: 0 auto;
}
.btn {
  display: inline-block;
  width: 178px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #888888;
  text-align: center;
  color: #888888;
  margin-top: 40px;
}
.hoverbox:hover .btn {
  background: #ff4101;
  color: white;
}
</style>


