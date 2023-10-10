<template>
  <div class="container">
    <div class="containerBox">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in pointImgList"
            :key="index"
          >
            <a
              target="_blank"
              :href="item.url"
              class="img_a"
            >
              <li class="pic">
                <img
                  class="img"
                  :src="item.thumb1"
                  :alt="item.title"
                >
              </li>
            </a>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </div>
</template>
 
<script>
// import { getImg } from '@/api/user'
import Swiper from "swiper"
export default {
  data () {
    return {
      pointImgList: [
        {
          thumb1: require('../../assets/image/20200911161846.jpg'),
          url:'https://www.baidu.com/',
          title:'第一个'
        },
        {
          thumb1: require('../../assets/image/20201120113925.jpg'),
          url:'https://www.baidu.com/www',
          title:'第二个'
        },
        {
          thumb1: require('../../assets/image/20201120113952.jpg'),
          url:'https://www.baidu.com/hahah',
          title:'第三个'
        },

      ]
    }
  },
  mounted () {
    this.bannerPoint()
  },
  created () {

  },
  methods: {
    bannerPoint () {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 2000, //2秒切换一次
          disableOnInteraction: false
        },
        updateOnImagesReady: true,
        slidesPerView: 1,
        spaceBetween: 25,
        //spaceBetween : '10%',按container的百分比

        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: 'fade',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: { 
					320: {  //当屏幕宽度大于等于320
					slidesPerView: 1,
					spaceBetween: 15
					},
					768: {  //当屏幕宽度大于等于768 
					slidesPerView: 1,
					spaceBetween: 15
					},
					1280: {  //当屏幕宽度大于等于1280
					slidesPerView: 1,
					spaceBetween: 20
					}
			},
      })
    }
  },
}

</script>
 
<style lang="less" scoped>
.containerBox {
  width: 1280px;
  margin: 50px auto;
}

.img_a {
  display: block;
  width: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s;
  }
}
// a:hover .pic img {
//   transform: scale(1.1);
//   transition: all 0.3s;
// }
@media only screen and (max-width: 450px) {
  .containerBox {
    width: 100%;
  }
}
</style>>


 