import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPhoto } from '../actions';
import PhotoList from '../components/PhotoList';

class PhotoShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPhoto(id);
  }

  render(){
    const { photo } = this.props;

    if(!photo) {
      return (<div>Loading...</div>);
    }

    return(
      <div>
        <PhotoList />
      </div>
    );
  }
}

function mapStateToProps({photo}, ownProps){
  return {photo: photo[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPhoto})(PhotoShow);
