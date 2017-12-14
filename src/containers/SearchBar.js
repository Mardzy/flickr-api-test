import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PhotoSearch from '../components/PhotoSearch';
import {fetchPhoto} from '../actions/index';


class SearchBar extends Component{
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
    this.props.fetchPhoto(this.state.tags);
    this.setState({
      tags: ''
    });
    // console.log('submit', this.state);
  }

  render(){
    return(
      <PhotoSearch
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        tags={this.state.tags}
      />
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPhoto}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
