import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'dark',
  }

  changeMode = () => {
    const {mode} = this.state
    this.setState(prevState =>
      prevState.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'},
    )
  }

  render() {
    const {mode} = this.state
    const buttonText = mode === 'dark' ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card ${mode}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
