import React from 'react';
import $ from "jquery";
import './App.css';
import './styles/style.css'
import {constants} from "./Constants";
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      image: constants["IMAGES"][0]
    }
  }
  sendPostRequest(value) {
    $.ajax({
      type: 'POST',
      url: constants["ESP_URL"],
      data: {angle: value},
      contentType: 'application/json;',
      crossDomain: true
    });
  }
  // this function will be invoked whatever change happens to slider val
  onSliderChangeHandler = (event) => {
    //TODO: remove logs
    console.log(event.target.value)
    this.sendPostRequest(event.target.value)
    this.setState({image: constants["IMAGES"][Math.floor(parseInt(event.target.value)/45)]})
  }
    //TODO: remove logs
  onButtonClickHandler = (event) => {
    console.log(event.target.value)
    this.sendPostRequest(event.target.value)
    this.setState({image: constants["IMAGES"][Math.floor(parseInt(event.target.value)/45)]})
  }
  render() {
    return (
      <div>
        <img src={this.state["image"]} alt="motor image"></img>
        <input className="slider" type="range" min="0" max="180" defaultValue="0" onChange={this.onSliderChangeHandler}></input>
        <button type="button" onClick={this.onButtonClickHandler} value="0">0</button>
        <button type="button" onClick={this.onButtonClickHandler} value="45">45</button>
        <button type="button" onClick={this.onButtonClickHandler} value="90">90</button>
        <button type="button" onClick={this.onButtonClickHandler} value="135">135</button>
        <button type="button" onClick={this.onButtonClickHandler} value="180">180</button>
      </div>
    );
  }

}
export default App;
