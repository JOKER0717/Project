<template>
  <div>
    <div class="swipercontainer">
      <div class="swiper-center">
        <div class="title">
          <h2>媒体报道</h2>
        </div>
        <Carousel autoplay
                  :dots="sss"
                  arrow="always">
          <Carousel-item v-for="item in newslist">
            <div class="demo-carousel">
              <ul class="ul">
                <li v-for="items in item"
                    class="newslist">
                  <p class="onep">{{items.titles}}</p>
                  <span class="onespan">{{items.date}}</span>
                  <p class="twop">{{items.text}}</p>
                </li>

              </ul>
            </div>
          </Carousel-item>
        </Carousel>
        <div class="hoverbox">
          <a href="#"
             class="btn">MORE+</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sss: "none",
      newslist: [
        [
          {
            titles: "网页设计的创意和灵感要",
            date: "03.07.2018",
            text:
              "网页设计的创意和灵感要从哪些角度激发？ 首先我们的网站的颜色搭配、平面设计和几何布局都尽量去体现简约之美，为消费者提供了简单流畅的购物体验。大规模的图片能给感官带来..."
          },
          {
            titles: "设计改版的正确姿势",
            date: "03.07.2018",
            text:
              "一个UI设计师大部分的日常工作是支持版本功能迭代，内容比较单调琐碎，而主导一次设计改版，不仅能够发挥设计所长，还能很好的体现设计师的价值。 但在开发资源紧张的产品团队..."
          },
          {
            titles: "扁平化网页设计主要有哪些",
            date: "03.07.2018",
            text:
              "扁平化网页设计主要的特征：简单的元素和形状，极简风，强功能性，大胆而易读的排版，清晰而严谨的视觉层次，关注细节，明亮的色彩和对比度明显的视觉感知，避免使用纹理、渐..."
          }
        ],
        [
          {
            titles: "网页设计的色彩心理学分析",
            date: "03.07.2018",
            text:
              "网页设计的色彩心理学分析 色彩心理学 色彩对用户所传达的不仅仅产品本身的信息，而且也对于用户的心理有着显著的影响。不同的色彩传递着不同的感受，同时这还和你所处的国家..."
          },
          {
            titles: "企业网站的内页我们应该",
            date: "03.07.2018",
            text:
              "企业网站如何制作内页？我们常常听到这么一种声音：某企业网站的首页设计非常精美，但是内页却平平无奇，有点不搭调，有的做的很高大尚但是看起来有很空洞，不可否认，一个常..."
          },
          {
            titles: "网站色彩搭配经验和设计",
            date: "03.07.2018",
            text:
              "网站色彩搭配经验和设计风格。在一般人眼中，网站几乎就代表着互联网。网站本身的价值正在被人们不断的发现，不断的认可。如何设计一个成功的网站？已成为越来越多的网站设计..."
          }
        ]
      ]
    };
  }
};
</script>

<style scoped>
.swipercontainer {
  width: 100%;
  height: 100%;
  background: pink;
}
.swiper-center {
  width: 1366px;
  height: 430px;
  background: #f6f6f6;
  margin: 0 auto;
}
.title {
  text-align: center;
  position: relative;
  height: 153px;
  width: 100%;
  background: url("../../assets/images/news/channel2.png") no-repeat center;
}
.title > h2 {
  font-size: 22px;
  position: relative;
  top: 99px;
  z-index: 2;
}
.newslist {
  width: 330px;
  float: left;
  /* background: pink; */
  margin-left: 35px;
}
.ul {
  width: 1200px;
  margin-left: 120px;
}
.onep {
  text-align: left;
  font-size: 18px;
  line-height: 45px;
}
.onespan {
  display: block;
  text-align: left;
  font-size: 12px;
  color: #888888;
  padding-bottom: 8px;
}
.twop {
  text-align: left;
  color: #555555;
  line-height: 22px;
}
.newslist:hover .onep {
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
