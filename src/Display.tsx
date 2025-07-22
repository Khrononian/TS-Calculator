import React from 'react'
import './Display.css'

type Props = {
    value: number
}

const Display: React.FC<Props> = ({ value }) => {
  return (
    <div className='background'>
        <span>{value}</span>
    </div>
  )
}

export default Display