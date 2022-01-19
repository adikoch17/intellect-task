import React,{useState} from "react";
import "./Widget2.css"


export const Widget2 = ({values}) =>{

    var vals = values;
    const [active,setActive] = useState([true,false,false,false,false])
    const [val,setVal] = useState(values[4])

    const toggleActive= (event) =>{
        setVal(event.target.dataset.value)
        let newAct = active.map((item,index)=>{
            if(index+1<=event.target.id){
                return true
            }
            else{
                return false
            }
        })

        setActive(newAct)

    }

    return(
        <div className="widget2">
            <p data-testid="w2value">{val}</p>
            <svg  fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" value="6">
            <path id="5" data-testid="p5" data-value={values[0]} className={active[4]?"active":null} onClick={toggleActive} d="M139.8 20.5H10.2C7.8 20.5 5.6 19.1 4.6 17L0.600004 8.6C-1.3 4.6 1.7 0 6.2 0H143.8C148.3 0 151.3 4.6 149.4 8.7L145.4 17.1C144.4 19.2 142.2 20.5 139.8 20.5Z" fill="#64808d"/>
            <path id="4" data-testid="p4" data-value={values[1]} className={active[3]?"active":null} onClick={toggleActive} d="M125 47.9H25.0001C22.6001 47.9 20.4001 46.5 19.4001 44.4L15.4001 36C13.5001 32 16.5001 27.3 21.0001 27.3H129C133.5 27.3 136.5 31.9 134.6 36L130.6 44.4C129.6 46.5 127.4 47.9 125 47.9Z" fill="#64808d"/>
            <path id="3" data-testid="p3" data-value={values[2]} className={active[2]?"active":null} onClick={toggleActive} d="M110.3 75.3H39.7C37.3 75.3 35.1 73.9 34.1 71.8L30.1 63.4C28.2 59.4 31.2 54.7 35.7 54.7H114.2C118.7 54.7 121.7 59.3 119.8 63.4L115.8 71.8C114.9 73.9 112.7 75.3 110.3 75.3Z" fill="#64808d"/>
            <path id="2" data-testid="p2" data-value={values[3]} className={active[1]?"active":null} onClick={toggleActive} d="M95.5001 102.6H54.5001C52.1001 102.6 49.9001 101.2 48.9001 99.1L44.9001 90.7C43.0001 86.7 46.0001 82 50.5001 82H99.5001C104 82 107 86.6 105.1 90.7L101.1 99.1C100.1 101.3 97.9001 102.6 95.5001 102.6Z" fill="#64808d"/>
            <path id="1" data-testid="p1" data-value={values[4]} className={active[0]?"active":null} onClick={toggleActive} d="M80.7001 130H69.3001C66.9001 130 64.7001 128.6 63.7001 126.5L59.7001 118.1C57.8001 114.1 60.8001 109.4 65.3001 109.4H84.8001C89.3001 109.4 92.3001 114 90.4001 118.1L86.4001 126.5C85.3001 128.6 83.1001 130 80.7001 130Z" fill="#64808d"/>
            </svg>
        </div>
    )
}