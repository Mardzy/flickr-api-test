import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const PhotoList = ({
  item, handleClick
}) => {
  const userUrl = `https://www.flickr.com/people/${item.owner}`,
    photoUrl = `https://www.flickr.com/photo/${item.owner}/${item.id}`,
    length = 80,
    titleString = item.title.length > length? item.title.substring(0, length) + '...' :item.title,
    ownerString = item.ownername.substring(0, length),
    dateString = moment(item.datetaken).format('Do MMM YYYY [at] h:mm');

  return(
    <div className="row list-container">
      <Link
        to={`photos/${item.id}`}
        className="col-sm-2  image-col p-0"
        onClick={handleClick}
      >
        <img
          src={item.url_m}
          alt={item.title}
        />
      </Link>

      <div className="col-sm-10">
        <div className="row list-info">
          <Link
            id="title"
            className="col-lg-12 my-auto"
            to={`photos/${item.id}`}
            onClick={handleClick}
          >
            <h2 id={item.id}>{titleString}</h2>
          </Link>
          <a
            id="owner"
            className="col-lg-2 col-sm-3 my-auto"
            href={userUrl}
          >
            <h5>{ownerString}</h5>
          </a>
          <p
            id="date"
            className="col-md-4 my-auto"
          >Published: {dateString}</p>
          <a
            id="photo-link"
            className="col-lg-2 col-sm-3 my-auto" href={photoUrl}><h6>View on flickr</h6></a>
        </div>
      </div>
    </div>
  );
};

export default PhotoList;
