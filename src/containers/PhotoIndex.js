import _ from 'lodash';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
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

    return ( _.map(this.props.photos, photo =>{
      // console.log('items', photo);
      return(
        <main
          key={photo.id}
          className="photo-container"
        >
          <PhotoList
            item={photo}
            index={true}
          />
        </main>);
    }));
  }

  render(){
    // console.log(this.props.photos);
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
