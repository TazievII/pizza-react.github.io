import axios from 'axios';

export const setLoader = (payload) => ({
  type: "SET_LOADING",
  payload,
})

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoader(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
