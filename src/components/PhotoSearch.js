import React from 'react';

const PhotoSearch = ({handleSubmit, handleChange, tags}) => {
  return(
    <form
      onSubmit={handleSubmit}
      className="input-group">

      <div className="form-group">
        <input
          type="text"
          placeholder="Search for images"
          className="form-control"
          value={tags}
          onChange={handleChange}
        />
      </div>

      <span className="input-group-btn">
        <button type="submit" className="btn-secondary btn">Search
        </button>
      </span>

    </form>);
};

export default PhotoSearch;
