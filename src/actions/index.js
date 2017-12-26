import Axios from 'axios';

const ROOT_URL = 'https://api.flickr.com/services/rest?';
const qs = {
  api_key: '721a5e9f4fb2451a63691e3aaabe2384',
  search_method: 'flickr.photos.search',
  getInfo_method: 'flickr.photos.getInfo',
  tags: 'cat',
  format: 'json',
  nojsoncallback: 1,
  content_type: 1,
  parse_tags: 1,
  sort: 'relevance',
  extras: 'description,date_taken,owner_name,tags,url_m',
  per_page: 5,
  page: 1,
  reqId: 'f866abd5'
};

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos(tag){

  const url = `${ROOT_URL}method=${qs.search_method}&tags=${tag}&api_key=${qs.api_key}&content_type=1&format=${qs.format}&nojsoncallback=1&parse_tags=1&tagmode=all&sort=${qs.relevance}&extras=${qs.extras}&per_page=${qs.per_page}&page=${qs.page}&reqId=${qs.reqId}`;

  const request = Axios.get(url);
  return{
    type: FETCH_PHOTOS,
    payload: request
  };
}

export const FETCH_PHOTO = 'FETCH_PHOTO';
export function fetchPhoto(id){

  const url = `${ROOT_URL}method=${qs.getInfo_method}&api_key=${qs.api_key}&photo_id=${id}&format=${qs.format}&nojsoncallback=1`;

  const request = Axios.get(url);
  return{
    type: FETCH_PHOTO,
    payload: request
  };
}
