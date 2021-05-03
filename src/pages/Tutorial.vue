<template>
  <div>
    <div class="s-pb80"></div>
    <div class="section section-about-us tutorials">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h1>Short describe for tutorials</h1>
            <div class="row">
              <div class="col-md-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper commodo semper sit nunc. Gravida enim in eu
                  adipiscing tempus dignissim dictumst urna. Turpis mattis
                  parturient non commodo. Lorem id elit, bibendum aliquam nec.
                  Massa suspendisse eu id dui ultrices lectus ultricies eu.
                  Egestas scelerisque sed vel scelerisque vitae. Curabitur a id
                  ac, dolor, enim dictum aliquet placerat. Pellentesque et arcu
                  neque viverra interdum. Sed pellentesque diam aliquam, massa.
                </p>
              </div>
              <div class="col-md-5">
                <div class="row youtube-section">
                  <div class="col-8 name">
                    <span class="title">Youtube Channel name</span>
                    <a href=""> <i class="fab fa-youtube"></i> Subscribe</a>
                  </div>
                  <div class="col-4 image">
                    <img
                      class="d-block"
                      src="img/logo-square.jpg"
                      alt="zoe Gazeley-Eke"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-10 s-mt36 search-title"
            v-if="searchValue && searchValue.length"
          >
            <span>Search results for '{{ searchValue }}':</span>
          </div>
          <div class="col-md-10" v-if="loading">
            <content-loading type="blog"></content-loading>
          </div>
          <div class="col-md-10" v-else>
            <div class="row">
              <div
                class="col-md-6 article"
                v-for="(item, index) in listArticles"
                :key="index"
              >
                <div class="title s-pb24">
                  {{ item.title }}
                </div>
                <div class="body">
                  <img :src="item.image_url" :alt="item.title" />
                  <div class="short-des">
                    {{ item.short_description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10 paging s-mt32">
            <n-pagination type="primary" :page-count="10" v-model="page">
            </n-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://apis.google.com/js/api.js"></script>
<script>
import { Carousel, CarouselItem } from 'element-ui';
import { Pagination } from '@/components';
import { axious } from 'axios';
import { mapState } from 'vuex'
export default {
  name: 'tutorial',
  bodyClass: 'landing-page',
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      listArticles: [
        {
          title: 'Video title',
          image_url: '/img/bg1.jpg',
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: 'Video title',
          image_url: '/img/bg3.jpg',
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: 'Video title',
          image_url: '/img/bg4.jpg',
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        },
        {
          title: 'Video title',
          image_url: '/img/bg5.jpg',
          short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                egestas facilisis nullam neque fames. A, auctor id quam id. Ut
                non cursus faucibus vulputate. Lectus auctor egestas vitae felis
                bibendum.`,
        }
      ],
      page: 1,
      loading: false,
    };
  },
  computed: {
    ...mapState("search", {
      searchValue: state => state.seasrchValue
    })
  },
  mounted() {

  },
  methods: {

  },
  watch: {
    searchValue: {
      handler: function (search) {
      },
      deep: true,
    }
  }
};
</script>
<style></style>
