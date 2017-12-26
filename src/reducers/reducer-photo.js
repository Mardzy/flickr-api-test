import _ from 'lodash';
import {FETCH_PHOTO, FETCH_PHOTOS} from '../actions';

export default function (state = [], action){
  switch(action.type){
    case FETCH_PHOTO:
      return { ...state, [action.payload.data.id]: action.payload.data};
    case FETCH_PHOTOS:
      // return [action.payload.data.photos];
      return _.mapKeys(action.payload.data.photos.photo, 'id');
    default:
      return state;
  }
}
