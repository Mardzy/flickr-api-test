import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import PhotoList from '../containers/PhotoList';

export default class App extends Component {

  render() {
    return (
      <main>
        <SearchBar />
        <PhotoList />
      </main>
    );
  }
}
