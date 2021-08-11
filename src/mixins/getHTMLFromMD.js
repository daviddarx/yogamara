import marked from 'marked';

export default {
  methods: {
    getHTMLfromMD: function (markdownString) {
      return marked(markdownString);
    }
  }
}
