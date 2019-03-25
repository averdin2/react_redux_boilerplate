import { EXAMPLE_ACTION_TYPE } from './types';

// fetch request
export const fetchRequest = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com')
    .then(res => res.json())
    .then(data => dispatch({
      type: EXAMPLE_ACTION_TYPE,
      payload: data
    }));
}