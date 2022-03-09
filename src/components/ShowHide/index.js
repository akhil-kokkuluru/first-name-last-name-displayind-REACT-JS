import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: true, lastname: true}

  displayProperty = () => {
    const {firstname, lastname} = this.state
    if (firstname === false) {
      this.setState(l => ({firstname: true}))
    } else {
      this.setState(l => ({firstname: false}))
    }
  }

  displayProperty2 = () => {
    const {firstname, lastname} = this.state
    if (lastname === false) {
      this.setState(l => ({lastname: true}))
    } else {
      this.setState(l => ({lastname: false}))
    }
  }

  render() {
    const {firstname, lastname} = this.state
    let element1
    let element2
    if (firstname === false) {
      element1 = (
        <div className="joeContainer">
          <p>Joe</p>
        </div>
      )
    }
    if (lastname === false) {
      element2 = (
        <div className="joeContainer">
          <p>Jonas</p>
        </div>
      )
    }

    return (
      <div className="totalcontainer">
        <div className="contentContainer">
          <button
            type="button"
            className="buttons"
            onClick={this.displayProperty}
          >
            Show/Hide Firstname
          </button>
          {element1}
        </div>

        <div className="contentContainer">
          <button
            type="button"
            className="buttons"
            onClick={this.displayProperty2}
          >
            Show/Hide Lastname
          </button>
          {element2}
        </div>
      </div>
    )
  }
}

export default ShowHide
