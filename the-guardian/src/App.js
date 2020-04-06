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
        <div id="navOne">
          <button>
            <svg width="30" height="30" viewBox="0 0 30 30" class="inline-arrow-right__svg inline-icon__svg">
              <path d="M22.8 14.6L15.2 7l-.7.7 5.5 6.6H6v1.5h14l-5.5 6.6.7.7 7.6-7.6v-.9"></path>
            </svg>
          </button>
          <button>
            <svg width="30" height="30" viewBox="0 0 30 30" class="inline-arrow-right__svg inline-icon__svg">
              <path d="M22.8 14.6L15.2 7l-.7.7 5.5 6.6H6v1.5h14l-5.5 6.6.7.7 7.6-7.6v-.9"></path>
            </svg>
          </button>
        </div>
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
        <svg viewBox="0 0 297 95" class="inline-the-guardian-logo__svg inline-logo__svg">
            <path fill="#121212" d="M66.8 50.7l5-2.6V8.4H68l-9.3 12.4h-1L58.2 7h40.5l.6 13.8h-1.1L89 8.4h-3.9V48l5 2.7V52H66.9v-1.3zm37-1.8V5L100 3.5v-.9L114.2.1h1.5v20.8l.3-.4a19 19 0 0 1 12.2-4.5c6.2 0 9 3.5 9 10v23l3.3 1.7V52H122v-1.3l3.4-1.8V26c0-3.6-1.6-5-4.6-5a7.8 7.8 0 0 0-4.9 1.6V49l3.3 1.8V52h-18.5v-1.2zm48.4-13.4c.4 7.2 3.6 12.8 11.4 12.8 3.7 0 6.3-1.7 8.8-3v1.5a17.4 17.4 0 0 1-13.6 6.2c-12 0-18-6.6-18-18.1 0-11.3 6.6-18.3 17.4-18.3 10.2 0 15.5 5 15.5 18.4v.4zm-.2-1.7l10.5-.7c0-9-1.5-15-4.6-15-3.3 0-5.9 7-5.9 15.6M0 69.6c0-19.1 12.7-26 26.8-26 6 0 11.6 1 14.8 2.3l.3 13.4h-1.4l-8.3-13a12.2 12.2 0 0 0-5.2-.8c-7.5 0-11.3 8.7-11.2 22.9.1 17 3 24.7 10 24.7a10.7 10.7 0 0 0 4.1-.7V74.2l-4.5-2.6V70h22v1.7l-4.5 2.5v18A49.2 49.2 0 0 1 26.2 95C10.2 95 0 87.5 0 69.6m47.1-9v-1L62 57l1.6.1v29c0 3.6 1.7 4.6 4.5 4.6a6 6 0 0 0 4.8-2.2v-26l-4-1.8v-1.2L83.6 57l1.4.2v33.3l4 1.6v1.1L74.4 95l-1.4-.1v-4.4h-.4A16.4 16.4 0 0 1 61.5 95C54.4 95 51 90.8 51 84.5v-22zm94.5-3.7l1.2.1v10.8h.4c1.6-7.9 5-10.8 9.3-10.8a4.7 4.7 0 0 1 1.8.3v11a12.6 12.6 0 0 0-3-.3 18.6 18.6 0 0 0-8 1.6v21.2l3.4 1.9V94h-19.3v-1.3l3.5-1.9v-29l-4-1.2v-1zm37.1.9V46.5l-4-1.5v-.9l15-2.7 1.3.2v48.8l4.2 1.5V93l-14.8 2-1.1-.1v-4h-.4a13.1 13.1 0 0 1-9.8 4.1c-8 0-13.9-6.1-13.9-18.7 0-13.2 6.9-19.7 17.2-19.7a14.7 14.7 0 0 1 6.3 1.2m0 31.2V60a5.5 5.5 0 0 0-4-1.3c-4 .1-6.5 6.2-6.5 16.9 0 9.6 1.8 15 7 14.8a5.2 5.2 0 0 0 3.5-1.3M211.5 57h1.3v34l3.4 1.8V94H197v-1.3l3.4-1.9V62.4l-4-1.7v-1.1zm1.4-9.2a6.4 6.4 0 0 1-6.6 6.3 6.3 6.3 0 1 1 0-12.6 6.5 6.5 0 0 1 6.6 6.3m46.3 43.1V62l-4-1.4v-1.4l14.7-2.8 1.5.2v4.3h.4a19.4 19.4 0 0 1 12.5-4.7c6.4 0 9.3 3 9.3 9.8v24.8l3.4 1.9V94h-19.2v-1.3l3.5-1.9v-24c0-3.8-1.6-5.3-4.7-5.3a8 8 0 0 0-5 1.7v27.6l3.3 1.9V94h-19.1v-1.3zm-21.3-18V68c0-7.3-1.5-9.6-6-9.6a11.8 11.8 0 0 0-1.6 0l-8 11h-1.1v-10a43.3 43.3 0 0 1 13.5-2.4c9.8 0 15.5 2.7 15.5 11v23.5l3.5 1v.9a15 15 0 0 1-7.2 1.6c-4.9 0-7.2-1.6-8.3-4.2h-.3c-2 2.8-5 4.3-9.6 4.3-5.8 0-9.8-3.6-9.8-9.9 0-6 3.8-9.4 11.5-10.8zm0 16.2V74.5l-2.4.2c-3.9.3-5.2 2.7-5.2 8.2 0 5.9 1.9 7.4 4.6 7.4a3.6 3.6 0 0 0 3-1.3M109.7 72.7V68c0-7.3-1.6-9.7-6.1-9.7a11.8 11.8 0 0 0-1.5.2L94 69.2h-1v-10a43.3 43.3 0 0 1 13.4-2.3c9.8 0 15.5 2.7 15.5 11v23.5l3.5 1v.9a15 15 0 0 1-7.2 1.6c-4.9 0-7.2-1.6-8.3-4.2h-.3c-2 2.8-5 4.3-9.5 4.3-5.9 0-9.8-3.6-9.8-9.9 0-6 3.7-9.4 11.4-10.8zm0 16.3V74.5l-2.5.2c-3.8.3-5.2 2.7-5.2 8.2 0 5.9 2 7.4 4.6 7.4a3.6 3.6 0 0 0 3-1.3"></path>
        </svg>
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
