import React from 'react'
import './Display.css'

type Props = {
    value: string
    secondValue: string
    operation: boolean
}

const Display: React.FC<Props> = ({ value, secondValue, operation }) => {
  return (
    <div className='background'>
        <span>{value}</span>
    </div>
  )
}

export default Display