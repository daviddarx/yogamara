
<template>
  <div class="header">
    <logo></logo>
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
            class="navigation-link"
            href="#about"
            @click="scrollToAnchor"
          >{{$t('nav.about')}}</a><!--
          --><a
            class="navigation-link"
            href="#availablity"
            @click="scrollToAnchor"
          >{{$t('nav.availablity')}}</a><!--
          --><a
            class="navigation-link"
            href="#contact"
            @click="scrollToAnchor"
          >{{$t('nav.contact')}}
          </a>
      </div>
    </nav>

    <div class="languages">
      <a
        class="language-link"
        :class="{'is-active' : this.$route.params.lang=='de'}"
        :href="'/de/' + this.$route.name"
      >
        DE
      </a><!--
      --><a
        class="language-link"
        :class="{'is-active' : this.$route.params.lang=='en'}"
        :href="'/en/' + this.$route.name"
      >
        EN
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Logo from './logo.vue';

  export default Vue.extend({
    components: {
      'logo': Logo
    },
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
