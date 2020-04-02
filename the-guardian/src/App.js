import React, { Component } from 'react';
import {env} from './components/env'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch("https://content.guardianapis.com/search?api-key="+env.key)
      .then(response => response.json()) 
      .then(
        result => {

          console.log(result);
          console.log(result.response);
          console.log(result.response.results);

          this.setState({
            isLoaded: true,
            items:result.results
          })

          console.log("state is updated",this.state.items)
        }
      ).catch(e => console.log("there's a error", e))
  }


  render() {
    return (
      <div id="grid">
        <nav id="navOne"></nav>
        <nav id="navTwo"></nav>
        <div id="mainArticle"></div>
        <div class="picArticle"></div>
        <div class="picArticle"></div>
        <div class="picArticle"></div>
        <div class="nopicArticle"></div>
        <div class="nopicArticle"></div>
        <div class="nopicArticle"></div>
      </div>
    )
  }
}
