export function setDocumentLang(lang) {
  document.documentElement.lang = lang;
}

export function setDocumentMetas(title, keywords, description) {
  (document.title = title), keywords, description;

  var keywordsMeta = document.querySelector('meta[name="keywords"]');
  var descriptionMeta = document.querySelector('meta[name="description"]');
  var ogTitleMeta = document.querySelector('meta[property="og:title"]');
  var ogDescriptionMeta = document.querySelector(
    'meta[property="og:description"]'
  );
  ogTitleMeta.setAttribute("content", title);
  keywordsMeta.setAttribute("content", keywords);
  descriptionMeta.setAttribute("content", description);
  ogDescriptionMeta.setAttribute("content", description);
}
