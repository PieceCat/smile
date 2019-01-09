<template>
  <div>
    <swiperDefault></swiperDefault>
    <swiperDefault2></swiperDefault2>
    {{ news.add_time | fmtdate("YYYY-MM-DD HH:mm:ss" )}}
  </div>
</template>

<script>
import "../../filter/dateFilter"

import { swiper, swiperSlide } from "vue-awesome-swiper"
import swiperDefault from "../swiper/swiperDefault"

//引入外部swiper组件 vue-awesome-swiper处理大段文章上拉下拉卡顿
import swiperDefault2 from '../swiper/swiperDefault2'
export default {
  data() {
    return {
      news: {
        add_time: new Date()
      }
    };
  },
  // components:{swiper,swiperSlide,swiperDefault}
  components: { swiper, swiperSlide, swiperDefault, swiperDefault2 }
};
</script>

<style scoped>
</style>