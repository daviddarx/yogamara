
<template>
  <div
    class="website-container"
    v-bind:class="{
      'is-ios': this.isiOS,
      'is-android': this.isAndroid
    }"
  >
    <custom-header ref="header"></custom-header>

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

    <browser-warning></browser-warning>
  </div>
</template>

<script>
  import Vue from "vue";
  import CustomHeader from './components/header.vue';
  import CustomTransition from './components/transition.vue';
  import BrowserWarning from './components/browser-warning.vue';
  import browserDetect from './browser-detect';


  export default Vue.extend({
    components: {
      'custom-header': CustomHeader,
      'custom-transition': CustomTransition,
      'browser-warning': BrowserWarning,
    },
    data() {
      return {
        isiOS: false,
        isAndroid: false,
        splashScreen: undefined,
        isLoaded: false,
        displayAfterLoadedDelay: 500
      }
    },
    computed: {
    },
    mounted () {
      this.splashScreen = document.querySelector('.splash');

      document.fonts.ready.then(() => {
        this.isLoaded = true;

        this.splashScreen.classList.add('hidden');
      });

      this.isiOS = browserDetect.isiOS;
      this.isAndroid = browserDetect.isAndroid;

      this.checkIfUserTouch();
    },
    methods: {
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
