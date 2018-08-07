<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon" alt="">
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swipwer area-->
        <div class="swiper-area">
            <van-swipe :autoplay="2000" >
                <van-swipe-item v-for="(banner ,index) in bannerPriArray" :key="index">
                    <img v-lazy="banner.image" width="100%" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--type bar-->
        <div class="type-bar">
            <div v-for="(cate, index) in category" :key="index">
                <img v-lazy="cate.image" width="50rem" alt="">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- AD banner area -->
        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" alt="">
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <!--swiper-->
                <swiper :options="swiperOption">
                    <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%" />
                            <div>{{item.goodsName}}</div>
                            <div><span class="recommend-price">￥{{item.price}}</span> ￥{{item.mallPrice}}</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!--floor one area-->
        <div class="floor">
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img :src="floor1_0.image" width="100%" />
                </div>
                <div>
                    <div class="floor-two">
                        <img :src="floor1_1.image" width="100%" />
                    </div>
                    <div>
                        <img :src="floor1_2.image" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
   



<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import {swiper , swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    slidesPerView:3
                },
                locationIcon: require('../../assets/images/location.png'),
                bannerPriArray: [],
                category:[],
                adBanner:'',
                recommendGoods:[],
                floor1:[],
                floor1_0:[],
                floor1_1:[],
                floor1_2:[]
            }
        },
        created() {
            axios({
                url:'https://www.easy-mock.com/mock/5b693c0d8733b43c01e267dc/example/SmileVue',
                method:'get'
            })
            .then(response=>{
                console.log(response)
                if(response.status==200){
                    this.bannerPriArray = response.data.data.slides
                    this.category = response.data.data.category
                    this.adBanner = response.data.data.advertesPicture
                    this.recommendGoods = response.data.data.recommend
                    this.floor1 = response.data.data.floor1            
                    this.floor1_0 =this.floor1[0]
                    this.floor1_1 =this.floor1[1]
                    this.floor1_2 =this.floor1[2]
                    // this.floor2 = response.data.data.floor2
                    // this.floor3 = response.data.data.floor3
                    // this.floorName = response.data.data.floorName
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
    }
</script>

<style scoped>
    .search-bar{
        height: 2.2rem;
        line-height: 2.2rem;
        background-color: #e5017d;
    }
    .search-input{
        width: 100%;
        height: 1.3rem;
        border-left: 0px;
        border-right: 0px;
        border-top: 0px;
        border-bottom: 1px solid #fff !important;
        background-color: #e5017d;
        color: #fff;
    }
    .location-icon{
        padding-left: .3rem;
        padding-top: .1rem;
    }
    .swiper-area{
      max-height: 15rem;
      overflow: hidden;
      clear:both;
    }
    .type-bar{
        background-color: #fff;
        margin: 0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .type-bar div{
        padding: .3rem;
        font-size: 12px;
        text-align: center;
    }
    .recommend-area{
        background-color: #fff;
        margin-top: .3rem;
    }
    .recommend-title{
        border-bottom: 1px solid #eee;
        font-size: 14px;
        padding: .2rem;
        color: #e5017d;
    }
    .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
    .recommend-price{
        color: #e5017d;
        font-size: 14px;
    }
    .floor-anomaly{
      display: flex;
      flex-direction:row;
      background-color: #fff;
      border-bottom:1px solid #ddd;
    }
    .floor-anomaly div{
        width:10rem;
    
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    .floor-one{
        border-right:1px solid #ddd;
    
    }
    .floor-two{
        border-bottom:1px solid #ddd;
    }
</style>