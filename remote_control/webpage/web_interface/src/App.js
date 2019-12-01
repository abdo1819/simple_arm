import React from 'react';
import './App.css';
import './styles/style.css'
import './Constants'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image_index: 0
    }
  }
  sendPostRequest(value) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", cosntants["ESP_URL"], true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      angle: value
    }));
  }
  // this function will be invoked whatever change happens to slider val
  onSliderChangeHandler = (event) => {
    //TODO: remove logs
    console.log(event.target.value)
    sendPostRequest(event.target.value)
  }
    //TODO: remove logs
  onButtonClickHandler = (event) => {
    console.log(event.target.value)
    sendPostRequest(event.target.value)
  }
  render() {
    return (
      <div>
        {
          //TODO: add image here 
        }
        <input className="slider" type="range" min="0" max="180" defaultValue="90" onChange={this.onSliderChangeHandler}></input>
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
