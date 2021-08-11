
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
    <div id="intro-p1">
      intro 1
    </div>
    <div id="intro-p2">
      intro 2
    </div>
    <div id="about">
      <h2>
        Über mich
      </h2>
    </div>
    <div id="availablity">
      <h2>
        Verfügbarkeit
      </h2>
    </div>
    <div id="contact">
      <h2>
        Kontakt
      </h2>
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

