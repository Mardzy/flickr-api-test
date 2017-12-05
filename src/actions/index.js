import Axios from 'axios';

const API_KEY = '721a5e9f4fb2451a63691e3aaabe2384';
const ROOT_URL = `https://www.flickr.com/services/feeds/photos_public.gne/?api_key${API_KEY}`;

export const FETCH_PHOTO = 'FETCH_PHOTO';

export function fetchPhoto(tag, page){
  const url = `${ROOT_URL}&tag=${tag}&page=${page}`;
  const request = Axios.get(url);
  return{
    type: FETCH_PHOTO,
    payload: request
  };
}

//
// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=89e4dff4a2ed37b7aa48e664a3dc6cf0&tags=kitten&text=cat&sort=relevance&per_page=5&page=5&format=json&nojsoncallback=1&auth_token=72157689233500311-970d7c582194f607&api_sig=867b044d6e502bca3a79df60b5087cb0
