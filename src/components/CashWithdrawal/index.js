// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    money: 2000,
  }

  stateChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="heading-container">
            <div className="s-container">
              <p className="s">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-description">Your Balance</p>
            <p className="balance">
              {money}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-holder">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                value={eachDenomination.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
