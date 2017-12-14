import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import PhotoList from '../components/PhotoList';
import SearchBar from '../containers/SearchBar';

class PhotoIndex extends Component {

  renderPhoto(photoData, index){
    console.log('renderPhoto',photoData );
    return (
      <main
        key={index}
        className="photo-container"
      >
        {photoData.photos.photo && photoData.photos.photo.map((item)=>{
          const userUrl = `https://www.flickr.com/people/${item.owner}`,
            photoUrl = `https://www.flickr.com/photos/${item.owner}/${item.id}`,
            length = 80,
            titleString = item.title.length > length? item.title.substring(0, length) + '...' :item.title,
            ownerString = item.ownername.substring(0, length),
            dateString = moment(item.datetaken).format('Do MMM YYYY [at] h:mm');
          return(
            <PhotoList
              key={item.id}
              item={item}
              titleString={titleString}
              userUrl={userUrl}
              ownerString={ownerString}
              dateString={dateString}
              photoUrl={photoUrl}
            />
          );
        })}
      </main>);
  }

  render(){
    console.log('photos ==>', this.props.photos);
    return(

      <section>
        <SearchBar />
        {this.props  && this.props.photos.map(this.renderPhoto)}
      </section>
    );
  }
}

function mapStateToProps({photos}){
  return {photos}; //{photos: photos} === {photos}
}

export default connect(mapStateToProps)(PhotoIndex);
