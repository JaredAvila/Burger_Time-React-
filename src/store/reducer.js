import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    bacon: 0,
    cheese: 0,
    meat: 0,
    produce: 0
  },
  totalPrice: 4.5
};

const INGREDIENT_PRICES = {
  produce: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};

export default reducer;
