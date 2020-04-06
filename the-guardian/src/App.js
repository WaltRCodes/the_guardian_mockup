import React, { Component } from 'react';
import {env} from './components/env'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    let array = new Array(14);
    let NewsObject = {
      title:'',
      description:'',
      urlToImage: ''
    };
    array.fill(NewsObject);
    this.state = {
      isLoaded: false,
      data: array
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
          let newsArray=[];
          let newNewsObject;
          for(let i =0;i<14;i++){
            newNewsObject = {
              title:result.articles[i].title,
              description:result.articles[i].description,
              urlToImage: result.articles[i].urlToImage
              //call image using the info here: https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js
            };
            newsArray.push(newNewsObject);
          }
          this.setState({
            isLoaded: true,
            data: newsArray
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
        <div id="logoSection">
          <img id="logo"/>
        </div>
        <div id="mainArticle">
          <div className="row">
            <ul>
              <li>{this.state.data[0].title}</li>
              <li>{this.state.data[0].description}</li>
            </ul>
            <img src ={this.state.data[0].urlToImage} height="300px"/>
          </div>
          <div className="row">
            <ul id="underPic">
              <li>{this.state.data[11].title}</li>
              <li>{this.state.data[12].title}</li>
              <li>{this.state.data[13].title}</li>
            </ul>
          </div>
        </div>
        
        <div className="picArticle">
          <img src ={this.state.data[1].urlToImage} width="100%"/>
          <p>{this.state.data[1].title}</p>
          <p>{this.state.data[1].description}</p>
        </div>
        <div className="Article">
          <img src ={this.state.data[2].urlToImage} width="100%"/>
          <p>{this.state.data[2].title}</p>
          <br />
          <br />
          <br />
          <p>{this.state.data[2].description}</p>
        </div>
        <div className="nopicArticle">
          <img src ={this.state.data[5].urlToImage} width="100%" />
          <p>{this.state.data[5].title}</p>
          <p>{this.state.data[6].title}</p>
          <p>{this.state.data[7].title}</p>
        </div>
        <div className="nopicArticle">
        <p>{this.state.data[8].title}</p>
          <p>{this.state.data[9].title}</p>
          <p>{this.state.data[10].title}</p>
          <p>{this.state.data[3].title}</p>
          <p>{this.state.data[4].title}</p>
        </div>
      </div>
    )
  }
}
