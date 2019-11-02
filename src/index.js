import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import shoppingList from './shopping-list';

///////////Test code///////////////
// fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//   .then(res => res.json())
//   .then(data => console.log(data));

// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res))

// console.log(api.BASE_URL);

// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });
//////////////////////////////////


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
