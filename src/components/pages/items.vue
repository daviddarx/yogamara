
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{items.title}}
    </h2>

    <div
      v-html="getHTMLfromMD(items.content)"
    >
    </div>

    <div>
      <div
        v-for="item in list"
        :key="item.title"
        ref="item"
      >
        <router-link
          v-bind:to="'/items/'+item.uuid"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import Vue from "vue";
  import CustomFooter from '../footer.vue';
  import contents from '../../contents';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        items: contents.items,
        list: contents.itemsList,
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

