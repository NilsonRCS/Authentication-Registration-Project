import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;

// modelo padrão dos conteúdos da  trybe, infelizmente não posso deixar link //
// documentação oficial https://redux.js.org/api/store //