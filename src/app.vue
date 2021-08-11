
<template>
  <div
    class="website-container"
    v-bind:class="{
      'is-ios': this.isiOS,
      'is-android': this.isAndroid
    }"
  >
    <h1 class="visually-hidden">Boilerplate Vue.js</h1>

    <logo></logo>

    <custom-navigation ref="nav"></custom-navigation>

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
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import CustomTransition from './components/transition.vue';
  import BrowserWarning from './components/browser-warning.vue';
  import browserDetect from './browser-detect';


  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
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

        setTimeout(() => {
          this.$refs.view.display();
        }, this.displayAfterLoadedDelay);
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
