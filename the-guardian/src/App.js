import React, { Component } from 'react';
import {env} from './components/env';
import cloudy from'./images/cloudy.png';
import rainy from'./images/rainy.png';
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
        <div id="sideBar">
        <div className="column">
          <h1>Headlines</h1>
          <h3>Monday</h3>
          <h3 id="redDate">16 December 2019</h3>
          <input type="search" value="Bronx"/>
            <div className="row">
                <svg width="32" height="32" viewBox="0 0 32 32" class="weather__icon__svg js-weather-icon__svg inline-weather-7__svg inline-weather__svg">
                  <path fill="#BDBDBD" d="M32 19.6c0-3.2-2.6-5.8-5.8-5.8-.8 0-1.5.1-2.3.4-1.4-1.5-3.4-2.3-5.4-2.3-1-3.2-3.8-5.5-7.1-5.5-4.3 0-7.7 3.4-7.7 7.6C1.6 15 0 17.2 0 19.5c0 3.2 2.6 5.8 5.8 5.8h7c.7 1.3 1.9 2.2 3.4 2.2h8.5c1.5 0 2.8-1.1 3.3-2.5 2.3-.7 4-2.8 4-5.4zM24.7 26h-8.5c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c.5 0 .9.1 1.2.4.5-1.2 1.6-2.1 2.9-2.1 1.5 0 2.8 1.2 3.1 2.8.4-.3.8-.5 1.3-.5 1.1 0 2.1 1 2.1 2.3s-.9 2.1-2.1 2.1zm3.5-3.4c-.4-1.7-1.8-2.9-3.5-2.9-.2 0-.3 0-.5.1-.8-1.4-2.2-2.3-3.9-2.3-1.4 0-2.6.6-3.5 1.7-.2 0-.4-.1-.7-.1-2.2 0-3.8 2-3.9 4.1H5.8c-2 0-3.6-1.6-3.6-3.6 0-1.7 1.3-3.2 2.9-3.6l.7 1.5.9-.3c-.4-1-.7-1.9-.7-3 0-3 2.5-5.5 5.5-5.5 3.1 0 5.3 2.8 5.3 5.8 2.6-1.1 5.8.2 6.5 2.9.7-.9 1.8-1.5 2.9-1.5 2 0 3.6 1.6 3.6 3.6 0 1.4-.6 2.5-1.6 3.1z"></path>
                </svg>
              <div className="column">
                Now
                35 F
              </div>
            </div>
          <div className="row">
            <div className="column">
              18:00
              <svg width="32" height="32" viewBox="0 0 32 32" class="weather__icon__svg js-weather-icon__svg inline-weather-7__svg inline-weather__svg">
                <path fill="#BDBDBD" d="M32 19.6c0-3.2-2.6-5.8-5.8-5.8-.8 0-1.5.1-2.3.4-1.4-1.5-3.4-2.3-5.4-2.3-1-3.2-3.8-5.5-7.1-5.5-4.3 0-7.7 3.4-7.7 7.6C1.6 15 0 17.2 0 19.5c0 3.2 2.6 5.8 5.8 5.8h7c.7 1.3 1.9 2.2 3.4 2.2h8.5c1.5 0 2.8-1.1 3.3-2.5 2.3-.7 4-2.8 4-5.4zM24.7 26h-8.5c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c.5 0 .9.1 1.2.4.5-1.2 1.6-2.1 2.9-2.1 1.5 0 2.8 1.2 3.1 2.8.4-.3.8-.5 1.3-.5 1.1 0 2.1 1 2.1 2.3s-.9 2.1-2.1 2.1zm3.5-3.4c-.4-1.7-1.8-2.9-3.5-2.9-.2 0-.3 0-.5.1-.8-1.4-2.2-2.3-3.9-2.3-1.4 0-2.6.6-3.5 1.7-.2 0-.4-.1-.7-.1-2.2 0-3.8 2-3.9 4.1H5.8c-2 0-3.6-1.6-3.6-3.6 0-1.7 1.3-3.2 2.9-3.6l.7 1.5.9-.3c-.4-1-.7-1.9-.7-3 0-3 2.5-5.5 5.5-5.5 3.1 0 5.3 2.8 5.3 5.8 2.6-1.1 5.8.2 6.5 2.9.7-.9 1.8-1.5 2.9-1.5 2 0 3.6 1.6 3.6 3.6 0 1.4-.6 2.5-1.6 3.1z"></path>
              </svg>
              35 F
            </div>
            <div className="column">
              21:00
              <svg width="32" height="32" viewBox="0 0 32 32" class="weather__icon__svg js-weather-icon__svg inline-weather-7__svg inline-weather__svg">
                <path fill="#BDBDBD" d="M32 19.6c0-3.2-2.6-5.8-5.8-5.8-.8 0-1.5.1-2.3.4-1.4-1.5-3.4-2.3-5.4-2.3-1-3.2-3.8-5.5-7.1-5.5-4.3 0-7.7 3.4-7.7 7.6C1.6 15 0 17.2 0 19.5c0 3.2 2.6 5.8 5.8 5.8h7c.7 1.3 1.9 2.2 3.4 2.2h8.5c1.5 0 2.8-1.1 3.3-2.5 2.3-.7 4-2.8 4-5.4zM24.7 26h-8.5c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c.5 0 .9.1 1.2.4.5-1.2 1.6-2.1 2.9-2.1 1.5 0 2.8 1.2 3.1 2.8.4-.3.8-.5 1.3-.5 1.1 0 2.1 1 2.1 2.3s-.9 2.1-2.1 2.1zm3.5-3.4c-.4-1.7-1.8-2.9-3.5-2.9-.2 0-.3 0-.5.1-.8-1.4-2.2-2.3-3.9-2.3-1.4 0-2.6.6-3.5 1.7-.2 0-.4-.1-.7-.1-2.2 0-3.8 2-3.9 4.1H5.8c-2 0-3.6-1.6-3.6-3.6 0-1.7 1.3-3.2 2.9-3.6l.7 1.5.9-.3c-.4-1-.7-1.9-.7-3 0-3 2.5-5.5 5.5-5.5 3.1 0 5.3 2.8 5.3 5.8 2.6-1.1 5.8.2 6.5 2.9.7-.9 1.8-1.5 2.9-1.5 2 0 3.6 1.6 3.6 3.6 0 1.4-.6 2.5-1.6 3.1z"></path>
              </svg>
              37 F
            </div>
            <div className="column">
              0:00
              <svg width="32" height="32" viewBox="0 0 32 32" class="weather__icon__svg js-weather-icon__svg inline-weather-7__svg inline-weather__svg">
                <path fill="#BDBDBD" d="M32 19.6c0-3.2-2.6-5.8-5.8-5.8-.8 0-1.5.1-2.3.4-1.4-1.5-3.4-2.3-5.4-2.3-1-3.2-3.8-5.5-7.1-5.5-4.3 0-7.7 3.4-7.7 7.6C1.6 15 0 17.2 0 19.5c0 3.2 2.6 5.8 5.8 5.8h7c.7 1.3 1.9 2.2 3.4 2.2h8.5c1.5 0 2.8-1.1 3.3-2.5 2.3-.7 4-2.8 4-5.4zM24.7 26h-8.5c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c.5 0 .9.1 1.2.4.5-1.2 1.6-2.1 2.9-2.1 1.5 0 2.8 1.2 3.1 2.8.4-.3.8-.5 1.3-.5 1.1 0 2.1 1 2.1 2.3s-.9 2.1-2.1 2.1zm3.5-3.4c-.4-1.7-1.8-2.9-3.5-2.9-.2 0-.3 0-.5.1-.8-1.4-2.2-2.3-3.9-2.3-1.4 0-2.6.6-3.5 1.7-.2 0-.4-.1-.7-.1-2.2 0-3.8 2-3.9 4.1H5.8c-2 0-3.6-1.6-3.6-3.6 0-1.7 1.3-3.2 2.9-3.6l.7 1.5.9-.3c-.4-1-.7-1.9-.7-3 0-3 2.5-5.5 5.5-5.5 3.1 0 5.3 2.8 5.3 5.8 2.6-1.1 5.8.2 6.5 2.9.7-.9 1.8-1.5 2.9-1.5 2 0 3.6 1.6 3.6 3.6 0 1.4-.6 2.5-1.6 3.1z"></path>
              </svg>
              34 F
            </div>
            <div className="column">
              03:00
              <img src={rainy} width="40px"/>
              33 F
            </div>
          </div>
        </div>
        </div>
        <div id="navOne"></div>
        <nav id="navTwo">
          <ul className="row" id="white">
            <li>News</li>
            <li>Opinion</li>
            <li>Sport</li>
            <li>Culture</li>
            <li>Lifestyle</li>
            More
          </ul>
        </nav>
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
