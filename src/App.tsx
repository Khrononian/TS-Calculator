import { useState } from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
import './App.css'

function App() {
  const [value, setValue] = useState('0')
  const [secondValue, setSecondValue] = useState('0')
  const [namedOperation, setNamedOperation] = useState('')
  const [decimal, setDecimal] = useState(false);
  const [operation, setOperation] = useState(false)
  const [secondNumbers, setSecondNumbers] = useState(false)
  const [newValues, setNewValues] = useState<string[]>([])
  const savedValues: string[] = []

  const changeValues = (e: React.MouseEvent) => {
    const targetText = e.currentTarget.innerHTML

    console.log(e.currentTarget.innerHTML, e.currentTarget, 'Food', value[0], value.slice())
    // if (value == 0 && targetText != '+/-') setValue(Number(targetText))
    if (value == '0' && targetText != '+/-' && targetText.match(/\d/g)) {
      setValue(targetText)
      setNewValues(prev => prev.concat(targetText))
      console.log('VV', savedValues, newValues)
    }
    else if (value.match(/\d/g)?.length != 15 && targetText.match(/\d/g) && operation == false) {
      setValue(prev => prev + targetText)
      setNewValues(prev => [prev + targetText])
      // savedValues[0] + targetText
      console.log('FIRST', savedValues, savedValues[0], newValues)
    }
    else if (operation == true && secondNumbers == false) {
      setNewValues(prev => prev.concat(targetText))
      // savedValues.push(value)

      setValue(targetText)
      setSecondNumbers(true)
    } else {
      setValue(prev => prev + targetText)
      setNewValues(prev => [prev + targetText])
    }
    // else if (operation == true) setValue(prev => prev + targetText)
    
    if (targetText == 'C') {
      setValue('0')
      setDecimal(false)
      setOperation(false)
      setSecondNumbers(false)
      setNewValues([])
      setNamedOperation('')
    }
    else if (targetText == 'DEL' && value !== '0' && value.length != 1) setValue(value.slice(0, -1))
    else if (targetText == '.' && decimal == false) {
      setValue(value + '.')
      setDecimal(true)
    }
    else if (targetText == '+/-' && value != '0' && value[0] != '-' && value.match(/\d/g)) setValue(prev => `-${prev}`)
    else if (value[0] == '-') setValue(prev => prev.slice(1))
    
    
  }

  const handleOperations = (e: React.MouseEvent, ) => {
    const targetText = e.currentTarget.innerHTML
    console.log('HANDLING', value)
    setOperation(true)
    setNamedOperation(e.currentTarget.className)
    // savedValues.push(value)
    console.log('AFTER', savedValues, newValues)
    if (targetText == '=') {
      switch (namedOperation) {
        case 'Add':
          console.log('ADDING', savedValues, value)
          addValues()
          break;
        case 'Subtract':
          subtractValues()
          break;
        case 'Multiply':
          multiplyValues()
          break;
        case 'Divide':
          divideValues()
          break;
      }
    }
  }

  const addValues = () => {
    console.log('ADDED', savedValues, value)
    // setSecondValue(value)
    
    setValue((Number(newValues[0]) + Number(newValues[1])).toString())
    setNewValues([(Number(newValues[0]) + Number(newValues[1])).toString()])
    console.log('NEWS NEW', value, newValues)
    setOperation(false)
    setSecondNumbers(false)
  }

  const subtractValues = () => {
    setValue((Number(newValues[0]) - Number(newValues[1])).toString())
    setNewValues([(Number(newValues[0]) - Number(newValues[1])).toString()])
    console.log('NEWS NEW', value, newValues)
    setOperation(false)
    setSecondNumbers(false)
  }

  const multiplyValues = () => {
    setValue((Number(newValues[0]) * Number(newValues[1])).toString())
    setNewValues([(Number(newValues[0]) * Number(newValues[1])).toString()])
    console.log('NEWS NEW', value, newValues)
    setOperation(false)
    setSecondNumbers(false)
  }

  const divideValues = () => {
    setValue((Number(newValues[0]) / Number(newValues[1])).toString())
    setNewValues([(Number(newValues[0]) / Number(newValues[1])).toString()])
    console.log('NEWS NEW', value, newValues)
    setOperation(false)
    setSecondNumbers(false)
  }

  return (
    <>
      <div className='mainDiv'>
        <Display value={value} secondValue={secondValue} operation={operation} />
        <Keyboard changeValues={changeValues} handleOperations={handleOperations} />
      </div>
    </>
  )
}

export default App