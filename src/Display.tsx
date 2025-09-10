import React from 'react'
import './Display.css'

type Props = {
    value: string
    secondValue: string
    operation: boolean
}
const formatNumbers = new Intl.NumberFormat('en-US')

const Display: React.FC<Props> = ({ value, secondValue, operation }) => {
  return (
    <div className='background'>
        <span>{formatNumbers.format(Number(value))}</span>
    </div>
  )
}

export default Display