import { createStore } from 'redux';

import reducer from './reducers';

export default createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__redux_devtools_extension__()
);
