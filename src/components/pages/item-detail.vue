
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{content.title}}
    </h2>

    <p>
      {{content.itemType}}
    </p>

    <p>
      {{content.desc}}
    </p>

    <img
      :src = content.image
      :alt = content.title
      class = "img-to-load"
      @load="imgLoaded"
    >

    <div>
      <div
        v-if="content.additionalImages"
      >
        <div
          v-for="(item, i) in content.additionalImages"
          :key="item.image+i"
          ref="image"
        >
          <img
            :src = item.image
            :alt = content.title
            class = "img-to-load"
            @load="imgLoaded"
          >
        </div>
      </div>
    </div>


    <div>
      <router-link
        v-bind:to="this.linkPrev.path"
      >
        &#8592; {{this.linkPrev.title}}
      </router-link>
      &nbsp;
      <router-link
        v-bind:to="this.linkNext.path"
      >
        {{this.linkNext.title}} &#8594;
      </router-link>
    </div>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import Vue from "vue";
  import CustomFooter from '../footer.vue';
  import contents from '../../contents';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import imgToLoad from '../../mixins/imgToLoad';

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
    },
    mixins: [
      getHTMLfromMDMixin,
      imgToLoad
    ],
    computed: {
      content: function () {
        return this.$route.meta.content;
      },
      id: function () {
        return this.$route.meta.id;
      },
      linkNext: function () {
        const id = (this.id < this.itemsList.length - 1 ) ? this.id + 1: 0;

        return {
          path: '/items/'+this.itemsList[id].uuid,
          title: this.itemsList[id].title
        }
      },
      linkPrev: function () {
        const id = (this.id == 0 ) ? this.itemsList.length - 1 : this.id - 1 ;

        return {
          path: '/items/'+this.itemsList[id].uuid,
          title: this.itemsList[id].title
        }
      }
    },
    data() {
      return {
        itemsList: contents.itemsList,
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

