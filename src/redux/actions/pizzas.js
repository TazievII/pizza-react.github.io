import axios from 'axios';

export const setLoader = (payload) => ({
  type: "SET_LOADING",
  payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoader(false));
  axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
