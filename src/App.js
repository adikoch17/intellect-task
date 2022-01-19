import React,{useState,useEffect} from 'react'
import './App.css';
import { Widget1 } from './components/widget1/Widget1';
import { Widget2 } from './components/widget2/Widget2';

function App() {


  return (
    <div className="App">
      <div>
        <h1>The Widgets</h1>
        <h4>-By Aditya Kocherlakota</h4>
        <p><a href="mailto:aditya.kocherlakota@gmail.com">aditya.kocherlakota@gmail.com</a></p><br/>
      </div>
      <div className='container'>
        <div className='widgetContainer'>
          <Widget1 min={0} max={8} step={1}/>
        </div>
        <div className='widgetContainer'>
          <Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>
        </div>
      </div>
      <br/>
      <div className="documentation">
        <h2>
          <u>The progressBar</u>
        </h2>
          This widget lets you create a circular progress bar that can be controlled using a slider
          <br/>
          <br/>
          <h3>Usage</h3>
          <code> {"<div className='widgetContainer'>\n<Widget1 min={0} max={8} step={1}/>\n</div>"} </code>
          <div className='widgetContainer'>
            <Widget1 min={0} max={8} step={1}/>
          </div>
          <h3>Props</h3>
          <ul>
            <li>min(int) : smallest value to be shown in the progress circle</li>
            <li>max(int) : largest value to be shown in the progress circle</li>
            <li>step(int) : interval between each value</li>
          </ul>
      </div>
      <div className="documentation">
        <h2>
          <u>The Wifi scoring widget</u>
        </h2>
          This widget lets you chooses one value amongst 5 different values, it can be used to show the lower values with a negative connotation and higher values with a positive connotation
          <br/>
          <br/>
          <h3>Usage</h3>
          <code> {`<div className='widgetContainer'><Widget2 values={["Very high","High","Neutral","Low","Very low"]}/></div>`} </code>
          <div className='widgetContainer'>
            <Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>
          </div>
          <h3>Props</h3>
          values(List:str) : List of values to be shown entered in descending order
      </div>
      <div className='documentation'>
        <h2>Future updates</h2>
        <ul>
          <li>Customizable colors</li>
          <li>varying number of options in the wifi widget</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
