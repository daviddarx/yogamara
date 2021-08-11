
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div id="intro-p1"
      v-html="getHTMLfromMD(home.intro01)"
    >
    </div>
    <div id="intro-p2"
      v-html="getHTMLfromMD(home.intro01)"
    >
    </div>
    <div id="about"
      v-html="getHTMLfromMD(home.about)"
    >
    </div>
    <div id="availablity"
      v-html="getHTMLfromMD(home.availablity)"
    >
    </div>
    <div id="contact">
      <div class="contact__image">
        <img
          class="contact__image-el"
          alt="Mara Pavic – thoughtful yoga practice"
          :src = home.contactImage
        >
      </div>
      <div class="contact__text"
        v-html="getHTMLfromMD(home.contact)"
      >
      </div>
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

