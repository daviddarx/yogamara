
<template>
  <nav
    class="navigation"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <a
        class="navigation__link"
        href="#about"
        @click="scrollToAnchor"
      >
        Über mich
      </a>
      <a
        class="navigation__link"
        href="#availablity"
        @click="scrollToAnchor"
      >
        Verfügbarkeit
      </a>
      <a
        class="navigation__link"
        href="#contact"
        @click="scrollToAnchor"
      >
        Kontakt
      </a>
    </div>
  </nav>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed: false,
      }
    },
    mounted () {
      requestAnimationFrame(this.displayNav);
    },
    methods: {
      displayNav: function () {
        this.isDisplayed = true;
      },
      scrollToAnchor: function(e) {
        e.preventDefault();

        let $targetedElement = document.querySelector(e.target.getAttribute('href'));
        $targetedElement.scrollIntoView({behavior: "smooth"});
      },
    }
  });
</script>
