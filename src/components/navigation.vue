
<template>
  <nav
    class="navigation"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <div class="navigation__links">
        <a
          class="navigation__link"
          href="#about"
          @click="scrollToAnchor"
        >{{$t('nav.about')}}</a><!--
        --><a
          class="navigation__link"
          href="#availablity"
          @click="scrollToAnchor"
        >{{$t('nav.availablity')}}</a><!--
        --><a
          class="navigation__link"
          href="#contact"
          @click="scrollToAnchor"
        >{{$t('nav.contact')}}
        </a>

        <div class="navigation__languages">
          <a
            class="language-link language-link--left"
            :class="{'is-active' : this.$route.params.lang=='de'}"
            :href="'/de/' + this.$route.name"
          >
            DE
          </a><!--
          --><a
            class="language-link language-link--right"
            :class="{'is-active' : this.$route.params.lang=='en'}"
            :href="'/en/' + this.$route.name"
          >
            EN
          </a>
          </div>
      </div>
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
