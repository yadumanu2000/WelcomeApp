import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    subscribed: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      subscribed: !prevState.subscribed,
    }))
  }

  render() {
    const {subscribed} = this.state

    return (
      <div className="div-container">
        <div className="heading-container">
          <h1 className="heading">Welcome</h1>
        </div>
        <div className="para-container">
          <p className="para">Thank You! Happy Learning</p>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={this.handleClick}>
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
