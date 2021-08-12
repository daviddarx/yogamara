import Vue from 'vue';
import VueRouter from 'vue-router';
import getBrowserLocale from "./util/i18n/get-browser-locale";
import { supportedLocalesInclude } from "./util/i18n/supported-locales";
import {
  setDocumentLang,
  setDocumentTitle
} from "./util/i18n/document";
import RouterView from "./components/router-view.vue";
import Home from './components/pages/home.vue';

import { i18n } from "./index.js";

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "de"
  }
}

window.defaultLanguage = getStartingLocale();

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {selector: to.hash}
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  routes: [
    {
      path: "/:lang",
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!["de", "en"].includes(lang)) return next("de");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        setDocumentLang(i18n.locale);
        setDocumentTitle(i18n.t("app.title"));

        return next();
      },
      children: [
        {
          label: 'Home',
          path: "home",
          name: "home",
          component: Home,
          meta: { pageTitle: 'Home' }
        },
      ]
    },
    {
      path: "*",
      redirect: "/"+window.defaultLanguage+"/home"
    }
  ],
  scrollBehavior,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-current',
});

export default router;
