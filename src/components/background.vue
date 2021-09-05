
<template>
  <div
    class="background"
    :class="{'is-visible': this.isVisible}"
    ref="background"
  >
  </div>
</template>
<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        colors: ["#E5E7FF", "#E2F0CB", "#FFE7C0"],
        isVisible: false,
        currentColorID: 0,
        colorChangeInterval: undefined,
        colorChangeIntervalDuration: 15000,
        bodyResetTimeout: undefined,
        bodyResetTimeoutDuration: 1000
      }
    },
    mounted () {
      this.colorChangeInterval = setInterval(this.changeColor, this.colorChangeIntervalDuration);
      this.$refs.background.style.transitionDuration = this.bodyResetTimeoutDuration + "ms";
    },
    methods: {
      changeColor: function () {
        this.currentColorID = (this.currentColorID < this.colors.length-1) ? this.currentColorID+1 : 0;

        this.$refs.background.style.backgroundColor = this.colors[this.currentColorID];

        this.isVisible = true;

        this.bodyResetTimeout = setTimeout(this.resetBody, this.bodyResetTimeoutDuration);
      },
      resetBody: function () {
        document.body.style.backgroundColor = this.colors[this.currentColorID];
        this.isVisible = false;
      }
    }
  });
</script>
