import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPhoto} from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      tags: '',
      page: null,
      perPage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handlePageOption = this.handlePageOption.bind(this);
    // this.handlePerPageOption = this.handlePerPageOption.bind(this);
  }

  handleChange(e){
    console.log('change',e.target.value);
    this.setState({
      tags: e.target.value
    });
  }

  // handlePageOption(e){
  //   console.log('page',e.target.value);
  //   this.setState({
  //     page: e.target.value
  //   });
  // }
  // handlePerPageOption(e){
  //   console.log('per page',e.target.value);
  //   this.setState({
  //     perPage: e.target.value
  //   });
  // }

  handleSubmit(e){
    e.preventDefault();
    //we need to go and fetch flickr data
    this.props.fetchPhoto(this.state.tags);
    this.setState({
      tags: '',
      perPage: this.state.perPage,
      page: this.state.page
    });
    console.log('submit', this.state);
  }

  render(){
    const {tags, page, perPage} = this.state;
    return(
      <form
        onSubmit={this.handleSubmit}
        className="input-group">

        {/* <div className="form-group page">
          <label>Page Number</label>

          <input
            type="number"
            min="1"
            placeholder="Page number"
            className="form-control"
            value={page}
            onChange={this.handlePageOption}
          />
        </div>

        <div className="form-group page">
          <label htmlFor="per-page">Items Per Page</label>
          <select
            className="form-control"
            id="per-page"
            value={perPage}
            onChange={this.handlePerPageOption}
          >
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div> */}

        <div className="form-group">
          <input
            type="text"
            placeholder="Search for images"
            className="form-control"
            value={tags}
            onChange={this.handleChange}
          />
        </div>

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
