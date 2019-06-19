<template>
  <div>
    <div class="company_news">
      <div class="companynews_center">
        <div class="newscontainer">
          <div class="title">
            <h2>公司新闻</h2>
          </div>
          <ul class="imgbox_container">
            <li v-for="item in list"
                class="flyli">
              <div class="imgbox">
                <img :src="item.img"
                     alt="">
                <div class="pos">
                  <p>2018</p>
                  <span>03.07</span>
                </div>
              </div>
              <p class="p">{{item.title}}</p>
              <p class="p1">{{item.content}}</p>
            </li>
            <div class="hoverbox">
              <a href="http://www.snnz.net/web/gongsixinwen/"
                 class="btn">MORE+</a></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("../../assets/images/news/1-1P30G335450-L.jpg"),
          title: "网页设计之图标设计",
          content:
            "网页设计之图标设计 网页图标设计是现代网页的重要设计元素。有效的图标就像指路牌，指引你浏览商品和服务。但同时，他们从不会有相似的图标，看起来正式，沉闷。这将增强你的..."
        },
        {
          img: require("../../assets/images/news/1-1P30G502400-L.jpg"),
          title: "网页制作中的css布局规则",
          content:
            "网页制作中的CSS布局规则 一、CSS规则定义有三种： 1)类比如.RedText、.BlueText和.BigText等等 2)标签针对原有HTML标签做的重新CSS定义 3)高级伪类、定义了ID的元素，以及综合性定义 二、CSS规..."
        },
        {
          img: require("../../assets/images/news/1-1P30G500440-L.jpg"),
          title: "简介的网页设计有哪些",
          content:
            "简洁的网页设计都有哪些优点？ 一、简洁网页设计让网站更容易导航 简洁的网站没有冗余的信息。这在两个方面有助于导航：通常，网站拥有更少的页面和栏目；或者网站的设计通常..."
        }
      ]
    };
  }
};
</script>
<style scoped>
.company_news {
  width: 100%;
  height: 100%;
}
.companynews_center {
  width: 1366px;
  height: 650px;
  margin: 0 auto;
  /* background: pink; */
  overflow: hidden;
}
.newscontainer {
  width: 1200px;
  height: 650px;
  margin: 0px auto;
  background: white;
}
.title {
  text-align: center;
  position: relative;
  height: 153px;
  width: 100%;
  background: url("../../assets/images/news/channel1.png") no-repeat center;
}
.title > h2 {
  font-size: 22px;
  position: relative;
  top: 95px;
  z-index: 2;
}
.imgbox_container {
  width: 1200px;
  height: 100%;
  backgroun: white;
}
.flyli {
  float: left;
  width: 380px;
  height: 380px;
  margin-left: 15px;
}
.imgbox {
  width: 380px;
  height: 253px;
  position: relative;
}
.imgbox > img {
  widows: 100%;
  height: 100%;
}
.p {
  text-align: left;
  font-size: 18px;
  line-height: 45px;
  height: 45px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.p1 {
  text-align: left;
  color: #866f6f;
  line-height: 22px;
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
.pos {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 55px;
  height: 55px;
  text-align: center;
  z-index: 2;
  background-color: #999999;
  color: #fff;
  /* font-size: 24px; */
}
.pos > p {
  color: #fff;
  font-size: 24px;
}
.pos > span {
  font-size: 12px;
  color: #fff;
}
.flyli:hover .pos {
  background: #ff4101;
}
.flyli:hover .p {
  color: #ff4101;
}
</style>

