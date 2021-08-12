<template>
  <router-view
    :key="$route.fullPath"
    ref="view"
  >
  </router-view>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        displayAfterLoadedDelay: 500
      }
    },
    mounted () {
      setTimeout(() => {
        this.$refs.view.display();
      }, this.displayAfterLoadedDelay);
    }
  });
</script>
