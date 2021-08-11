
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{about.title}}
    </h2>

    <div
        v-for="item in about.content"
        v-bind:key="item.title"
      >
        <h3>
          {{item.title}}
        </h3>
        <div
          v-if="item.textcontent"
          v-html="getHTMLfromMD(item.textcontent)"
        >
        </div>
        <dl
          v-if="item.listcontent"
        >
          <template
            v-for="list in item.listcontent"
          >
            <dt
              v-bind:key="list.definitionlist.title+'titel'"
              v-html="list.definitionlist.title"
            >
            </dt>
            <dd
              v-bind:key="list.definitionlist.title+'desc'"
              v-html="getHTMLfromMD(list.definitionlist.desc)"
            >
            </dd>
          </template>
        </dl>
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
        about: contents.about,
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

