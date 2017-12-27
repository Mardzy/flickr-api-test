import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhoto } from '../actions';
import PhotoList from '../components/PhotoList';

class PhotoShow extends Component {

  render(){
    const { photo } = this.props;

    if(!photo) {
      return (<div>Loading...</div>);
    }

    return(
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <PhotoList
          item={photo}
          show={true}
        />
      </div>
    );
  }
}

function mapStateToProps({photos}, ownProps){
  return {photo: photos[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPhoto})(PhotoShow);
