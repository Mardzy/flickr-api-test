import { combineReducers } from 'redux';

import PhotoReducer from './reducer-photo';

const rootReducer = combineReducers({
  photos: PhotoReducer
});

export default rootReducer;
