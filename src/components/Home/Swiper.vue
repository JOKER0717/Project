<template lang="">
    <div class="header-swiper">
       <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for ='item in swiperList' :key="item" >
                {{item}}
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
    </div>
</template>
<script>
export default {
    // props:['swiperList'],
    data(){
        return {
            swiperList:[1,2,3,4,5],
            swiperLists:[],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                speed:300,
                autoplay : {
                    delay:3000
                }, 
            },
             navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
    },
        }
    },
    created() {
        this.swiperLists=this.swiperList
    },
 
    methods: {
   
    },
}
</script>
<style lang="stylus" scoped>
    .header-swiper{
        height: 0;
        background #ccc;
        padding-bottom: 26.67%;
    }
    .header-swiper img{
        width: 100%;
        height: 100%;
        display block;
    }
     .header-swiper>>>.swiper-pagination-bullet-active {
        background #fff;
    }
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom:0;
}
</style>