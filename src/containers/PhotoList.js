import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class PhotoList extends Component {

  renderPhoto(photoData, index){
    // console.log('renderPhoto',photoData );
    return (
      <div
        className="photo-container"
        key={index}
      >
        {photoData.photos.photo.map((item)=>{
          console.log(item.title);
          const userUrl = `https://www.flickr.com/people/${item.owner}`,
            photoUrl = `https://www.flickr.com/photos/${item.owner}/${item.id}`,
            length = 70,
            titleString = item.title.length > length? item.title.substring(0, length) + '...' :item.title,
            ownerString = item.ownername.substring(0, length),
            dateString = moment(item.datetaken).format('Do MMM YYYY h:mm');
          return(
            <div className="row list-container"
              key={item.id}
            >

              <div className="col-sm-2 image-col p-0">
                <img src={item.url_m} alt={item.title} />
              </div>

              <div className="col-sm-10">
                <div className="row list-info">
                  <a className="col-lg-12 my-auto" href="#"><h4>{titleString}</h4></a>
                  <a
                    className="col-lg-2 my-auto"
                    href={userUrl}
                  >
                    <h5>{ownerString}</h5>
                  </a>
                  <p className="col-lg-4 my-auto">Published: {dateString}</p>
                  <a className="col-lg-2 my-auto" href={photoUrl}><h6>View on flickr</h6></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>);
  }

  render(){
    console.log('photos ==>', this.props.photos);
    return(
      <section>
        {this.props.photos.map(this.renderPhoto)}
      </section>
    );
  }
}

function mapStateToProps({photos}){
  return {photos}; //{photos: photos} === {photos}
}

export default connect(mapStateToProps)(PhotoList);
