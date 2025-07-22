import React from 'react'
import './Keyboard.css'

type Props = {
    changeValues: (e: React.MouseEvent) => void
}
const Keyboard: React.FC<Props> = ({ changeValues }) => {
    const divValues = ['C', 'DEL', '.', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', `+/-`, '0', '=']

    return (
        <>
            <div className='board'>
                {divValues.map((item, key) => 
                    <div onClick={changeValues} key={key}>{item}</div>
                )}
            </div>
        </>
    )
}

export default Keyboard