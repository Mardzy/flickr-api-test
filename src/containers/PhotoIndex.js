import _ from 'lodash';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import PhotoList from '../components/PhotoList';
import PhotoSearch from '../components/PhotoSearch';
import {fetchPhotos} from '../actions';

class PhotoIndex extends Component {
  constructor(props){
    super(props);
    this.state={
      tags: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      tags: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //we need to go and fetch flickr data
    // console.log('handleSubmit',fetchPhotos(this.state.tags));
    this.props.fetchPhotos(this.state.tags);
    this.setState({
      tags: ''
    });
  }

  renderPhotos(){
    // console.log('renderPhoto',this.props.photos );
    // if(!photoData){
    //   return(<div>Loading...</div>);
    // }
    return ( _.map(this.props.photos, photo =>{
      console.log('items', photo);
      const userUrl = `https://www.flickr.com/people/${photo.owner}`,
        photoUrl = `https://www.flickr.com/photo/${photo.owner}/${photo.id}`,
        length = 80,
        titleString = photo.title.length > length? photo.title.substring(0, length) + '...' :photo.title,
        ownerString = photo.ownername.substring(0, length),
        dateString = moment(photo.datetaken).format('Do MMM YYYY [at] h:mm');
      return(
        <main
          key={photo.id}
          className="photo-container"
        >

          <PhotoList
            item={photo}
            titleString={titleString}
            userUrl={userUrl}
            ownerString={ownerString}
            dateString={dateString}
            photoUrl={photoUrl}
          />
        </main>);
    }));
  }

  render(){
    console.log(this.props.photos);
    return(
      <section>
        <PhotoSearch
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          tags={this.state.tags}
        />
        {this.renderPhotos()}
      </section>
    );
  }
}

function mapStateToProps({ photos }){
  return { photos }; //{photos: photos} === {photos}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPhotos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
