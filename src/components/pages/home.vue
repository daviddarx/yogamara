
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div
      id="intro-p1"
      class="content-bit"
      v-html="getHTMLfromMD(home.intro01)"
    >
    </div>
    <div
      id="intro-p2"
      class="content-bit content-bit--right"
      v-html="getHTMLfromMD(home.intro02)"
    >
    </div>
    <div
      id="about"
      class="content-bit"
      v-html="getHTMLfromMD(home.about)"
    >
    </div>
    <div
      id="availablity"
      class="content-bit content-bit--right"
      v-html="getHTMLfromMD(home.availablity)"
    >
    </div>
    <div
      id="contact"
      class="contact content-bit"
    >
      <div class="contact__image">
        <img
          class="contact__image-el"
          alt="Mara Pavic – thoughtful yoga practice"
          :src = home.contactImage
        >
      </div>
      <div
        class="contact__text"
        v-html="getHTMLfromMD(home.contact)"
      >
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as homeDE from '../../../content/home_de/home_de.json';
  import * as homeEN from '../../../content/home_en/home_en.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import { i18n } from "../../index.js";

  export default Vue.extend({
    components: {
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        home: (i18n.locale =='de') ? homeDE : homeEN,
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

