const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Javi';

const getItems = function () {

  return fetch(`${BASE_URL}/items`)
};

const createItem = function(name){
  let newItem = JSON.stringify({
    name: name,
  })
  fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: newItem,
  })
}

export default {
  getItems,
  createItem,
};