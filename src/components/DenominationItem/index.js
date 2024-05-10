// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, onChangeOfValue} = props
  const {id, value} = denomination
  const onWithdraw = () => {
    onChangeOfValue(value)
  }
  return (
    <li className="list-value">
      <button type="button" onClick={onWithdraw} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
