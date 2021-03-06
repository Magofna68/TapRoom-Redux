import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
  const { name, brand, price, quantity, content, id, type } = action;
  switch (type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          quantity: quantity,
          content: content,
          id: id
        }
      });
    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default: return state;
  }
};