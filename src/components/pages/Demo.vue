<template>
    <div>
        <swiperDefault2></swiperDefault2>
    </div>
</template>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import swiperDefault2 from '../swiper/swiperDefault'
    // import swiperDefault2 from '../swiper/swiperDefault2'
    export default {
        data() {
            return {
                
            }
        },
        // components:{swiper,swiperSlide,swiperDefault}
        components:{swiper, swiperSlide, swiperDefault2}
    }
</script>

<style scoped>

</style>