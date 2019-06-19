<template>
    <header :class="showHeader?'box':'boxbei'">
        <div id="nav">
            <div class="logocon">
                <img v-if="!showHeader" src="@/assets/images/shouye/logo.png" alt="">
                <img v-else src="@/assets/images/shouye/logofff.png" alt="">
            </div>
            <ul class="headetext">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
                <li><router-link to="/building">网站建站</router-link> </li>
                <li> <router-link to="/cost">费用</router-link></li>
                <li> <router-link to="/case">案例</router-link> </li>
                <li><router-link to="/journalism">新闻</router-link></li>
                <li><router-link to="/contact">联系</router-link></li>
                <li>
                    <img v-if="!showHeader" src="../assets/images/shouye/rz_phone_act.png" alt=""> 
                    <img v-else src="../assets/images/shouye/rz_phone.png" alt=""> 
                    <span class="text" ><span v-if="showText?true:false">24小时咨询：</span>13436911353</span>
                </li>
               
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    props:['showHeader','showText'],
    data() {
        return {
            // showHeader:true,
        }
    },
}
</script>
<style lang="less" scoped>
    header{
        width: 100%;
        position: fixed;
        height: 100px;
        z-index: 10;
        top:0;
        
    }
    .boxbei{
         background: #fff;

    }
    .box{
        color:#fff;
    }
   .box #nav a,.box #nav .headetext .text{
       color:#fff;
        &.router-link-exact-active {
      color: red;
    }
    }
    #nav{
        width: 86%;
        height: 100%;
        margin: 0 auto;
       
       .logocon{
           float: left;
           margin: 17px;
       }
       .headetext{
           float: right;
           display: flex;
            line-height: 100px;
           li{
               font-size: 15px;
               padding: 0 28px;
               
               img{
                    vertical-align: middle;
               }
               .text{
                   margin: 0 0 0 30px ;
                   font-size: 16px;
                    font-weight: bold;
                    color: #2c3e50; 
               }
           }
         
       }
    }
</style>

