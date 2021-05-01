<template>
  <div>
    <div class="page-header page-header-medium">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container text-left">
          <h1 class="title">ViVEXELT</h1>
          <h2 class="sub-title">
            Vietnam Virtual EXchange for English Language Teaching A British
            Council funded Digital Learning Innovation Pilot With the support of
            the Vietnam’s National Foreign Languages Project (NFLP)
          </h2>
          <n-button class="text-bold" type="primary" round
            >Get Started
          </n-button>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 home-carousel">
            <el-carousel height="500px">
              <el-carousel-item>
                <img class="d-block" src="img/bg1.jpg" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Nature, United States</h5>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <img class="d-block" src="img/bg3.jpg" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Somewhere Beyond, United States</h5>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <img class="d-block" src="img/bg4.jpg" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Yellowstone National Park, United States</h5>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-md-6">
            <!-- First image on the right side, above the article -->
            <h3>
              <img
                style="width: 150px"
                src="img/real-logo.png"
                alt="Third slide"
              />
            </h3>

            <div
              class="text-center tweeter"
              v-for="(item, index) in tweets"
              :key="index"
            >
              <div class="tweeter-head">
                {{ item.title }}
                <span class="tag">{{ item.tag }}</span>
                <img
                  style="width: 50px"
                  src="img/tweeter.png"
                  alt="Third slide"
                />
              </div>
              <div class="tweeter-body s-mb24">{{ item.body }}</div>
              <div class="tweeter-react">
                <div class="s-pr40">
                  <i class="fas fa-comment-alt icon20 s-mr12"></i>
                  <span class="icon20">{{ item.comments || "" }}</span>
                </div>
                <div class="s-pr36">
                  <i class="fas fa-retweet icon25 s-mr12"></i>
                  <span class="icon20">{{ item.retweets || "" }}</span>
                </div>
                <div class="s-pr36">
                  <i class="fas fa-heart icon20 s-mr12"></i>
                  <span class="icon20">{{ item.likes || "" }}</span>
                </div>
                <div class="s-pr36">
                  <span class="icon20" style="color: #858585">Twitter</span>
                </div>
              </div>
            </div>
            <n-button class="text-bold w100" type="primary" round
              >Load more
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      tweets: [
        {
          title: 'ViVEXELT',
          tag: '@vivexelt',
          body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
          comments: 0,
          retweets: 7,
          likes: 14,
        },
        {
          title: 'ViVEXELT',
          tag: '@vivexelt',
          body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
          comments: 0,
          retweets: 7,
          likes: 14,
        },
      ]
    };
  },
  computed: {
    logoSvg() {
      return require('../assets/images/logo.svg')
    }
  }
};
</script>
<style></style>
