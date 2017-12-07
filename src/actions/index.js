import Axios from 'axios';

const ROOT_URL = 'https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=description%2Cmedia%2Cowner_name%2Curl_m%2C&per_page=50&page=1&lang=en-UK&viewerNSID=&method=flickr.photos.search&api_key=721a5e9f4fb2451a63691e3aaabe2384&format=json&hermes=1&hermesClient=1&reqId=f866abd5&nojsoncallback=1';

export const FETCH_PHOTO = 'FETCH_PHOTO';

export function fetchPhoto(tag){
  const url = `${ROOT_URL}&tags=${tag}`;
  const request = Axios.get(url, {
    qs: {
      tags: tag,
      format: 'json',
      nojsoncallback: 1,
      tagmode: 'all'
    }
  });

  return{
    type: FETCH_PHOTO,
    payload: request
  };
}
