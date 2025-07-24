import { useState } from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
import './App.css'

function App() {
  const [value, setValue] = useState('0')
  const [decimal, setDecimal] = useState(false);
  const operations = ['Add', 'Subtract', 'Multiply', 'Divide']

  const changeValues = (e: React.MouseEvent) => {
    const targetText = e.currentTarget.innerHTML
    const number = parseInt(targetText, 10)

    console.log(e.currentTarget.innerHTML, e.currentTarget, 'Food', value[0], value.slice())
    // if (value == 0 && targetText != '+/-') setValue(Number(targetText))
    if (value == '0' && targetText != '+/-') setValue(targetText)
    else if (value.toString().match(/\d/g)?.length != 15 && targetText.toString().match(/\d/g)) setValue(prev => prev + targetText)
    
    if (targetText == 'C') {
      setValue('0')
      setDecimal(false)
    }
    else if (targetText == 'DEL' && value !== '0') setValue(value.slice(0, -1))
    else if (targetText == '.' && decimal == false) {
      setValue(value + '.')
      setDecimal(true)
    }
    else if (targetText == '+/-' && value != '0' && value[0] != '-') setValue(prev => `-${prev}`)
    else if (value[0] == '-') setValue(prev => prev.slice(1))
    
    // switch (operations) {
    //   case 'Add':
    //     addValues(targetText)
    //     break;
    // }
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