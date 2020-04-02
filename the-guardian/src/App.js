import React, { Component } from 'react';

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
    fetch("https://content.guardianapis.com/search?api-key=3255c9db-8a37-4c01-8f99-25c1b756ed27")
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
        
      </div>
    )
  }
}
