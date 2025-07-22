import { useState } from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  // USE A STRING TO PUSH THE DECIMALS THEN TURN THEM TO NUMBERS WHEN DOING OPERATIONS
  const [decimal, setDecimal] = useState(false)
  const [decimalString, setDecimalString] = useState('')

  const changeValues = (e: React.MouseEvent) => {
    const targetText = e.currentTarget.innerHTML
    const number = parseInt(targetText, 10)

    console.log(e.currentTarget.innerHTML, 'Food', )
    if (value == 0 && targetText != '+/-') setValue(Number(targetText))
    else if (value.toString().match(/\d/g)?.length != 15 && targetText.toString().match(/\d/g)) setValue(prev => Number(prev.toString() + targetText))
    
    if (targetText == 'C') setValue(0)
    else if (targetText == 'DEL' && value !== 0) setValue(Number(value.toString().slice(0, -1)))
    else if (targetText == '.') setValue(prev => Number(prev.toString() + '.1'))
    else if (targetText == '+/-' && value != 0) setValue(prev => prev * -1)
    
    else console.log('FI', value, )
    

  }

  const addValues = (clickedNumber: string) => {
    setValue(prev => Number(prev + clickedNumber))
  }


  return (
    <>
      <div className='mainDiv'>
        <Display value={value} />
        <Keyboard changeValues={changeValues} />
      </div>
    </>
  )
}

export default App