<template>
  <div class="pos_f">
    <ul class="center_num">
      <li class="fly">
        <div>
          <b class="line"></b>
          <h2 class="num">{{idx}}</h2>
        </div>
        <p>8年互联网品牌建设经验</p>
      </li>
      <li class="fly">
        <div>
          <b class="line"></b>
          <h2 class="num">{{idx1}}</h2>
        </div>
        <p>19名有想法有激情的队友</p>
      </li>
      <li class="fly">
        <div>
          <b class="line"></b>
          <h2 class="num">{{idx2}}</h2>
        </div>
        <p>260多项网站细节标准</p>
      </li>
      <li class="fly">
        <div>
          <b class="line"></b>
          <h2 class="num">{{idx3}}</h2>
        </div>
        <p>服务900多家知名的品牌客户</p>
      </li>
    </ul>
    <div class="con"
         v-show='showpos'>
      <img src="../../assets/images/about/bg_number_sjc.jpg"
           alt="">
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { setTimeout, setInterval, clearInterval } from "timers";

export default {
  data() {
    return {
      showBgImg: true,
      idx: 8,
      idx1: 19,
      idx2: 260,
      idx3: 900
    };
  },
  methods: {},
  computed: {
    ...mapState(["showpos", "tops"])
  },
  watch: {
    tops(newval, val) {
      // console.log(newval);
      let tis = null;
      let idx = 8;
      let idx1 = 19;
      let idx2 = 260;
      let idx3 = 900;
      if (newval > 350) {
        tis = setInterval(() => {
          if (this.idx < 20) {
            idx++;
            this.idx = idx;
            console.log(this.idx);
          }
          if (this.idx1 < 40) {
            idx1++;
            this.idx1 = idx1;
            console.log(this.idx1);
          }
          if (this.idx2 < 300) {
            idx2 += 10;
            this.idx2 = idx2;
            console.log(this.idx2);
          }
          if (this.idx3 < 950) {
            idx3 += 10;
            this.idx3 = idx3;
            console.log(this.idx3);
          } else {
            clearInterval(tis);
          }
        }, 100);
      }
      if (newval < 350) {
        idx = 0;
        idx1 = 0;
        this.idx = idx;
        this.idx1 = idx1;
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.pos_f {
  width: 100%;
}
.con {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.con img {
  height: 100%;
  width: 100%;
}
.center {
  width: 100%;
  height: 380px;
  background: red;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
}
.center_num {
  width: 1366px;
  height: 380px;
  background: pink;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
}
.center_num li {
  width: 209px;
  height: 209px;
  border-radius: 10px;
  float: left;
  background: #ff1d00;
  position: relative;
}
.num {
  font-family: "Impact", Arial, Helvetica, sans-serif;
  line-height: 210px;
  color: #fff;
  font-size: 120px;
  text-align: center;
}
.line {
  height: 10px;
  display: block;
  background: #ff1d00;
  position: absolute;
  top: 50%;
  z-index: 16;
  width: 100%;
}
.center_num p {
  text-transform: lowercase;
  display: block;
  margin-top: 30px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.fly {
  transform: translate(0, -28px);
  transition-duration: 1s;
  transition: all 1s ease-out 0s;
}
</style>
