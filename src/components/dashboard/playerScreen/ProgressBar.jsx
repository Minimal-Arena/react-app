import React from 'react'
import Filler from '../playerScreen/Filler'

const ProgressBar = (props) => {
    return (
        <div className='progressBar'>
            <Filler percentage={props.percentage}/>
        </div>
    )
}

export default ProgressBar