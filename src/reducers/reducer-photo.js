import {FETCH_PHOTO} from '../actions/index';

export default function (state = [], action){
  switch(action.type){
    case FETCH_PHOTO:
      //create entirely new array and return it to state
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
