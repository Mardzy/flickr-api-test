import React from 'react';

const PhotoList = ({item, titleString, userUrl, ownerString, dateString, photoUrl}) => {
  return(
    <div className="row list-container"
      key={item.id}>

      <div className="col-sm-2  image-col p-0">
        <a href="">
          <img src={item.url_m} alt={item.title} />
        </a>
      </div>

      <div className="col-sm-10">
        <div className="row list-info">
          <a id="title" className="col-lg-12 my-auto" href="#"><h2>{titleString}</h2></a>
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
