
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
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

  export default Vue.extend({
    data() {
      return {
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },

    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

