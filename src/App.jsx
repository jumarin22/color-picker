import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360 + 1),
    sat: Math.floor(Math.random() * 100 + 1),
    light: Math.floor(Math.random() * 100 + 1),
  }

  updateHue = e => {
    this.setState({ hue: e.target.value })
  }

  updateSat = e => {
    this.setState({ sat: e.target.value })
  }

  updateLight = e => {
    this.setState({ light: e.target.value })
  }

  handleNewState = e => {
    this.setState({
      hue: Math.floor(Math.random() * 360 + 1),
      sat: Math.floor(Math.random() * 100 + 1),
      light: Math.floor(Math.random() * 100 + 1),
    })
  }

  render() {
    const newBackgroundColor = `hsl(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%)`
    const newStyle = { backgroundColor: newBackgroundColor }
    return (
      <div>
        <h1>Color Picker</h1>
        <div className="colorBox" style={newStyle}></div>
        <p>{newBackgroundColor}</p>
        <div id="hSlider">
          <input
            type="range"
            min="1"
            max="360"
            value={this.state.hue}
            onChange={this.updateHue}
          />
          <label>H</label>
        </div>
        <div className="sSlider">
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.sat}
            onChange={this.updateSat}
          />
          <label>S</label>
        </div>
        <div className="lSlider">
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.light}
            onChange={this.updateLight}
          />
          <label>L</label>
        </div>
        <div className="aSlider">
          <input type="range" min="1" max="100" />
          <label>A</label>
        </div>
        <button type="button" onClick={this.handleNewState}>
          Randomize!
        </button>
      </div>
    )
  }
}
