// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    current: 2000,
  }

  onChangeOfValue = value => {
    this.setState(prevState => ({current: prevState.current - value}))
  }

  render() {
    const {current} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="logo-name-container">
            <div className="logo">
              <p>S</p>
            </div>
            <p className="name">Sara Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="rupees">{current}</p>
              <p className="rupees-message">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES) </p>
          <ul className="value-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                onChangeOfValue={this.onChangeOfValue}
                denomination={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
