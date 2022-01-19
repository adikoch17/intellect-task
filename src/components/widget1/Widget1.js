import React, { useState } from 'react'
import { ProgressBar } from './progressBar/ProgressBar.js'
import "./Widget1.css"



export const Widget1 = ({min,max,step}) =>{

    const [percentage,setPercentage] = useState(0)

    const handleChange = (event) =>{
        var val = (event.target.value/max)*100
        setPercentage(val)
    }
    return(
        <div className="widget1">
            <ProgressBar percentage={percentage} max={max}/>
            <input id="progressInput" type="range" min={`${min}`} max={`${max}`} step={`${step}`} value={percentage/100*max} onChange={handleChange} style={{
                width:"60%"
            }}/>
        </div>
    )

}