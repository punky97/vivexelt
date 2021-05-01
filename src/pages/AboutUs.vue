<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great company.</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-7 ml-auto mr-auto text-left"></div>
          <div class="col-md-3 ml-auto mr-auto text-left">
            <ul class="categories">
              <li class="active">
                <a href="#what-is-vivexelt" v-smooth-scroll>What is ViVEXELT?</a>
                <i class="fas fa-caret-left"></i>
              </li>
              <li>
                <a href="#1" v-smooth-scroll>What is ViVEXELT?</a>
                <i class="fas fa-caret-left"></i>
              </li>
              <li>
                <a href="#2" v-smooth-scroll>What ViVEXELT aims to</a>
                <i class="fas fa-caret-left"></i>
              </li>
              <li>
                <a href="#3" v-smooth-scroll>Who is ViVEXELT for?</a>
                <i class="fas fa-caret-left"></i>
              </li>
              <li>
                <a href="#4" v-smooth-scroll>Meet ViVEXELT Team </a>
                <i class="fas fa-caret-left"></i>
              </li>
              <li>
                <a href="#5" v-smooth-scroll
                  >When will the courses take place?
                </a>
                <i class="fas fa-caret-left"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'about-us',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
