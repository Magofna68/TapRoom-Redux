import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/actionTypes'

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Batsquatch',
    brand: 'Rogue',
    content: '6.6%',
    price: '$5.50',
    quantity: '124',
    id: 1
  };

  const currentState = {
    1: {
      name: 'Batsquatch',
      brand: 'Rogue',
      content: '6.6%',
      price: '$5.50',
      quantity: '124',
      id: 1
    },
    2: {
      name: 'Lime',
      brand: 'BudLight',
      content: '4.5%',
      price: '$4.75',
      quantity: '124',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed to the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, content, price, quantity, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      content: content,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        content: content,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should delete a keg successfully', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Lime',
        brand: 'BudLight',
        content: '4.5%',
        price: '$4.75',
        quantity: '124',
        id: 2
      }
    });
  });

});