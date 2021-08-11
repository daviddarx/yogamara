import * as home from '../content/home/home.json';
import * as about from '../content/about/about.json';
import * as items from '../content/items/items.json';
import * as itemsList from '../content/items/items/*.json';
delete itemsList.default;
import * as contact from '../content/contact/contact.json';

export default {
  home: home,
  about: about,
  items: items,
  itemsList: Object.keys(itemsList).map(objKey => itemsList[objKey]).sort((e1, e2) =>
    new Date(e2.date) - new Date(e1.date)
  ),
  contact: contact
};
