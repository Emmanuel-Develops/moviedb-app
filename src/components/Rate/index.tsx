import React, { useState } from 'react'

import {Wrapper} from './Rate.styles'

type Props = {
    handleRating: (a: number) => void;
}

const Rate: React.FC<Props> = ({handleRating}) => {
    const [value, setValue] = useState(5)
  return (
    <div>
        <input 
            type="range"
            min='0'
            max='10'
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
        />
        {value}
        <p>
            <button onClick={() => handleRating(value)}>Rate</button>
        </p>
    </div>
  )
}

export default Rate