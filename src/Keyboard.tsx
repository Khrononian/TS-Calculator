import React from 'react'
import './Keyboard.css'

type Props = {
    changeValues: (e: React.MouseEvent) => void
}
const Keyboard: React.FC<Props> = ({ changeValues }) => {
    const divValues = ['C', 'DEL', '.', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', `+/-`, '0', '=']

    const renderClassNames = (key: number) => {
        return key == 3 ? 'Divide' : key == 7 ? 'Multiply' : key == 11 ? 'Subtract' : key == 15 ? 'Add' : undefined
    }

    return (
        <>
            <div className='board'>
                {divValues.map((item, key) => 
                    <div onClick={changeValues} className={renderClassNames(key)} key={key}>{item}</div>
                )}
            </div>
        </>
    )
}

export default Keyboard