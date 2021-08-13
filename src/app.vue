
<template>
  <div
    class="website-container"
    v-bind:class="{
      'is-ios': this.isiOS,
      'is-android': this.isAndroid
    }"
  >
    <custom-header ref="header"></custom-header>

    <illustration></illustration>

    <div class="content">
      <transition
        name="content"
      >
        <router-view
          :key="$route.fullPath"
          ref="view"
        >
        </router-view>
      </transition>

    </div>

    <custom-transition></custom-transition>

    <background></background>

    <browser-warning></browser-warning>
  </div>
</template>

<script>
  import Vue from "vue";
  import CustomHeader from './components/header.vue';
  import CustomTransition from './components/transition.vue';
  import Illustration from './components/illustration.vue';
  import Background from './components/background.vue'
  import BrowserWarning from './components/browser-warning.vue';
  import browserDetect from './browser-detect';


  export default Vue.extend({
    components: {
      'custom-header': CustomHeader,
      'custom-transition': CustomTransition,
      'illustration': Illustration,
      'background': Background,
      'browser-warning': BrowserWarning,
    },
    data() {
      return {
        isiOS: false,
        isAndroid: false,
        splashScreen: undefined,
        isLoaded: false,
        displayAfterLoadedDelay: 500,
        imgsToLoad: [
          "../static/images/yogamara_bg.png",
          "../static/images/yogarmara_eye_01.png"
        ],
        imgsLoaded: 0,
        imgLoading: undefined
      }
    },
    computed: {
    },
    mounted () {
      this.splashScreen = document.querySelector('.splash');

      document.fonts.ready.then(() => {
        this.preloadImage();
      });

      this.isiOS = browserDetect.isiOS;
      this.isAndroid = browserDetect.isAndroid;

      this.checkIfUserTouch();
    },
    methods: {
      preloadImage: function () {
        this.imgLoading = new Image;
        if (this.imgLoading.complete) {
          this.imageLoadCompleteListener()
        } else {
          this.imgLoading.addEventListener('load', this.imageLoadCompleteListener)
        }
        this.imgLoading.src = this.imgsToLoad[this.imgsLoaded];
      },
      imageLoadCompleteListener: function () {
        this.imgLoading.removeEventListener('load', this.imageLoadCompleteListener);
        this.imgsLoaded ++;

        if (this.imgsLoaded < this.imgsToLoad.length) {
          this.preloadImage();
        } else {
          this.setLoaded();
        }
      },
      setLoaded: function () {
        this.isLoaded = true;
        this.splashScreen.classList.add('hidden');

      },
      checkIfUserTouch: function () {
        window.isTouch = false;
        window.addEventListener('touchstart', this.touchListener);
      },
      touchListener: function (e) {
        window.isTouch = true;
        document.body.classList.add('is-touch');
        window.removeEventListener('touchstart', this.touchListener);
      },
    }
  });
</script>
