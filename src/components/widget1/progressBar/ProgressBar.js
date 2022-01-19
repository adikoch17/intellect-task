import React from 'react'
import './ProgressBar.css'




export const ProgressBar = ({percentage,max}) =>{

    //radius of the circle; here we subtract by 5 to accomodate for the border width
    var radius  = (130-2)/2
    //we make it so that the border is dashed and the size of each dash is the perimeter of the circle
    var dashArray = radius*Math.PI*2
    //We change the offset of the border/dash according to the percentage
    var dashOffest = dashArray-dashArray*percentage/100

return(
    <svg width="200" height="200"> 
        {
        //progress bar circle
        }
        <circle cy="100" cx="100" r={`${radius}`} strokeWidth="4" fill="rgba(69,109,124,255)" 
        style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffest
        }}
        //rotating so that the border starts from the top
        transform = {'rotate(-90 100 100)'}
        className="progressbar" 
        data-testid="innerCircle"
        >
        </circle>
        {
            //outer dashed circle
        }
        <circle cy="100" cx="100" r={`${radius+25}`} stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" 
        style={{
            strokeDasharray: "6px"
        }}
        data-testid="outerCircle"
        />
        <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
            data-testid="progressText"
            >
            {percentage*max/100}
        </text>
    </svg>
    )

}
