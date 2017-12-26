import React from 'react';
import {Link} from 'react-router-dom';

const PhotoList = ({item, titleString, userUrl, ownerString, dateString, photoUrl, handleClick}) => {
  console.log('photoList', item);
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

    </div>);
};

export default PhotoList;
