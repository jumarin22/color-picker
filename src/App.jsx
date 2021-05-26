import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 180,
    sat: 50,
    light: 50,
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

  render() {
    const newBG = `hsl(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%)`
    const newStyle = { backgroundColor: newBG }
    return (
      <div>
        <h1>Color Picker</h1>
        <div className="colorBox" style={newStyle}></div>
        <div id="hSlider">
          <input
            type="range"
            min="1"
            max="360"
            id="H"
            value={this.state.hue}
            onChange={this.updateHue}
          />
          <label htmlFor="H">H</label>
        </div>
        <div className="hSlider">
          <input
            type="range"
            min="1"
            max="100"
            id="S"
            value={this.state.sat}
            onChange={this.updateSat}
          />
          <label htmlFor="H">S</label>
        </div>
        <div className="hSlider">
          <input
            type="range"
            min="1"
            max="100"
            id="L"
            value={this.state.light}
            onChange={this.updateLight}
          />
          <label htmlFor="H">L</label>
        </div>
        <div className="hSlider">
          <input type="range" min="1" max="100" id="A" />
          <label htmlFor="H">A</label>
        </div>
      </div>
    )
  }
}
