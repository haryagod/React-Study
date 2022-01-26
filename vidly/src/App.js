import React, { Component } from 'react';
import Movies from './components/movies';
import {getMovies} from './services/fakeMovieService' 
class App extends Component {


  render() { 
    return (<Movies/>);
     
  }
}
export default App;