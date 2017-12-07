import React, {Component} from 'react';
import {connect} from 'react-redux';

class PhotoList extends Component {

  render(){
    console.log('photos ==>>', this.props.photos);
    return(
      <div>
        <h1 className="text-center">What will you Search for</h1>
        <div className="row list-container">
          <div className="col-sm-2 image-col">
            hello
            {/* <img src={} alt={} /> */}
          </div>
          <div className="col-sm-10">
            <div className="row list-info">
              <a className="col-lg-12 my-auto" href="#"><h3>Post Title</h3></a>
              <a className="col-lg-2 my-auto" href="#"><h5>Post Author</h5></a>
              <p className="col-lg-4 my-auto">published</p>
              <a className="col-lg-2 my-auto" href="#"><h6>View on flickr</h6></a>

            </div>
          </div>
        </div>
      </div>);
  }
}

function mapStateToProps({photos}){
  return {photos}; //{photos: photos} === {photos}
}

export default connect(mapStateToProps)(PhotoList);
