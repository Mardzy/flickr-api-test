import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPhoto} from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    // console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //we need to go and fetch flickr data
    this.props.fetchPhoto(this.state.term,)
    this.setState({term: ''});

  }

  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className="input-group">
        <input
          type="text"
          placeholder="Search for images"
          className="form-control"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn-secondary btn">Search
          </button>
        </span>
      </form>

    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPhoto}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
