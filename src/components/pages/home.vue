
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{home.title}}
    </h2>

    <div
      v-html="getHTMLfromMD(home.content)"
    >
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import contents from '../../contents';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    components: {
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        home: contents.home,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },

    methods: {
      display: function () {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

