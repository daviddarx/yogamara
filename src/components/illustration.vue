
<template>
  <div
    class="illustration"
    :class="{'is-fixed' : this.isIllustrationFixed}"
    ref="illustration"
  >
    <div
      class="illustration__container"
      ref="container"
    >
      <img
        src="../../static/images/yogamara_bg.png"
        alt="Mara Pavic Illustration"
        class="illustration__bg-image"
        @load="imageLoadCompleteListener"
      >
      <div class="illustration__eye">
        <img
          src="../../static/images/yogarmara_eye_01.png"
          alt="Mara Pavic Illustration - Eye Blinking"
          class="illustration__eye-img"
          :class="{'is-displayed' : this.activeEyeID==0}"
        >
        <img
          src="../../static/images/yogarmara_eye_02.png"
          alt="Mara Pavic Illustration - Eye Blinking"
          class="illustration__eye-img"
          :class="{'is-displayed' : this.activeEyeID==1}"
        >
        <img
          src="../../static/images/yogarmara_eye_03.png"
          alt="Mara Pavic Illustration - Eye Blinking"
          class="illustration__eye-img"
          :class="{'is-displayed' : this.activeEyeID==2}"
        >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import debounce from 'lodash/debounce';

  export default Vue.extend({
    data() {
      return {
        scrollDebounced: undefined,
        isIllustrationFixed: true,
        illustrationHeight: 0,
        activeEyeID:0,
        eyesTimeout: undefined,
        eyesTimeoutIntervalDuration: 11000,
        eyesTimeoutBlinkDuration: 100,
        eyesTimeoutDirection: 0,
        isMobile: false,
        isMobileStep: 768
      }
    },
    mounted () {
      this.scrollDebounced = debounce(this.scrollListener, 1);
      window.addEventListener('resize', this.resizeListener);
    },
    methods: {
      imageLoadCompleteListener: function () {
        this.eyesTimeout = setTimeout(this.eyesTimeoutListener, this.eyesTimeoutIntervalDuration);

        this.setScrollBehaviour();
        this.resizeListener();
      },
      resizeListener: function () {
        const windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (windowW <= this.isMobileStep && this.isMobile == false) {
          this.isMobile = true;
          this.resetScrollBehaviour();
        } else if (windowW > this.isMobileStep && this.isMobile == true) {
          this.isMobile = false;
          this.setScrollBehaviour();
        }

        this.illustrationHeight = this.$refs.container.offsetHeight;
      },
      setScrollBehaviour: function() {
        window.addEventListener('scroll', this.scrollDebounced);
      },
      resetScrollBehaviour: function () {
        window.removeEventListener('scroll', this.scrollDebounced);
        this.isIllustrationFixed = false;
        this.$refs.illustration.style.top = "0";
      },
      scrollListener: function () {
        const windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const previousFixedState = this.isIllustrationFixed;

        this.isIllustrationFixed = (scrollTop <= document.body.scrollHeight - this.illustrationHeight);

        if (previousFixedState != this.isIllustrationFixed) {
          if (this.isIllustrationFixed == true) {
            this.$refs.illustration.style.top = "0";
          } else {
            this.$refs.illustration.style.top = document.body.scrollHeight - this.illustrationHeight + "px";
          }
        }
      },
      eyesTimeoutListener: function () {
        let timeoutDuration = 0;

        if (this.eyesTimeoutDirection == 0) {
          if (this.activeEyeID == 0) {
            this.activeEyeID = 1;
            timeoutDuration = this.eyesTimeoutBlinkDuration;
          } else if (this.activeEyeID == 1) {
            this.activeEyeID = 2;
            timeoutDuration = this.eyesTimeoutBlinkDuration;
            this.eyesTimeoutDirection = 1;
          }
        } else {
          if (this.activeEyeID == 2) {
            this.activeEyeID = 1;
            timeoutDuration = this.eyesTimeoutBlinkDuration;
          } else if (this.activeEyeID == 1) {
            this.activeEyeID = 0;
            timeoutDuration = this.eyesTimeoutIntervalDuration;
            this.eyesTimeoutDirection = 0;
          }
        }

        this.eyesTimeout = setTimeout (this.eyesTimeoutListener, timeoutDuration);
      }
    }
  });
</script>
