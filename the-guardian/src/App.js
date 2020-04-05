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
    fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey="+env.key)
      .then(response => response.json()) 
      .then(
        result => {

          console.log(result);
          console.log(result.articles);
          //console.log(result.response.articles);
          //twelve articels
          console.log(result.articles[0].title);
          console.log(result.articles[0].description);
          console.log(result.articles[0].urlToImage);
          //console.log(result.articles[0].content);
          this.setState({
            isLoaded: true,
            items:result.results
          })

          //console.log("state is updated",this.state.items)
        }
      ).catch(e => console.log("there's a error", e))
  }


  render() {
    return (
      <div id="grid">
        <div id="sideBar"></div>
        <div id="navOne"></div>
        <nav id="navTwo"></nav>
        <img id="logo"/>
        <div id="mainArticle"></div>
        <div className="picArticle"></div>
        <div className="picArticle"></div>
        <div className="picArticle"></div>
        <div className="nopicArticle"></div>
        <div className="nopicArticle"></div>
        <div className="nopicArticle"></div>
      </div>
    )
  }
}
