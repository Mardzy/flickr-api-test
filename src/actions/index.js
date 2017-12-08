import Axios from 'axios';

const ROOT_URL = 'https://api.flickr.com/services/rest?';

export const FETCH_PHOTO = 'FETCH_PHOTO';

export function fetchPhoto(tag, page){
  page = 5;
  const qs = {
    api_key: '721a5e9f4fb2451a63691e3aaabe2384',
    method: 'flickr.photos.search',
    tags: tag,
    format: 'json',
    nojsoncallback: 1,
    content_type: 1,
    parse_tags: 1,
    sort: 'relevance',
    extras: 'description,media,owner_name,url_m',
    per_page: page,
    page: 1,
    lang: 'en-UK',
    hermes: 1,
    hermesClient: 1,
    reqId: 'f866abd5'
  };
  console.log('qs',qs.method);
  const url = `${ROOT_URL}&api_key=${qs.api_key}&method=${qs.method}&tags=${qs.tag}&content_type=1&format=${qs.format}&nojsoncallback=1&parse_tags=1sort=${qs.relevance}&extras=${qs.extras}&per_page=${qs.per_page}&page=${qs.page}&reqId=${qs.reqId}`;

  const request = Axios.get(url);
  return{
    type: FETCH_PHOTO,
    payload: request
  };
}

// &hermes=1,
// &hermesClient=1,
