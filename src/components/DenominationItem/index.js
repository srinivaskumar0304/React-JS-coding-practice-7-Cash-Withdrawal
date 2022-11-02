// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, stateChange} = props

  const changeState = () => {
    stateChange(value)
  }

  return (
    <li className="amount-container">
      <button type="button" className="button" onClick={changeState}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
