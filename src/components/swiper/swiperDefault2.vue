<template>
  <div >
      <swiper :option="swiperOption">
        <swiper-slide class="text">
           <div class="content">
               啥事大法师打发斯蒂芬大法师打发阿斯顿发送到发
               adfasdffasdfasd打算ad发阿斯蒂芬阿萨德
               的发as地方阿斯蒂芬阿斯蒂芬阿斯蒂芬as的asdfadfasdfwe日期we
                阿斯顿发送到发asdfa水电费
                阿斯顿发送到发asdfa水电费阿道夫
                adas地方阿道夫
           </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    mousewheel: true
                }
            }
        },
        components:{ swiper,swiperSlide }
    }
</script>

<style scoped>
     .swiper{
      height: 300px;
      overflow: hidden;
  }
  .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   
  }
</style>