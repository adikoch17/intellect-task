import React from 'react';
import { ReactDOM } from 'react';
import { cleanup, render, screen ,fireEvent} from '@testing-library/react';
import {Widget1} from "./Widget1"


describe("testing rendering of Widget-1 elements",()=>{
    afterEach(cleanup)
    test("testing if slider is present",()=>{
        render(<Widget1 min={0} max={10} step={1}/>)
        expect(screen.getByRole("slider")).toBeInTheDocument()
    })

    test("testing if circles are being rendered",()=>{
        render(<Widget1 min={0} max={10} step={1}/>)
        expect(screen.getByTestId("innerCircle")).toBeInTheDocument()
        expect(screen.getByTestId("outerCircle")).toBeInTheDocument()
    })

})

describe("testing input and output of Widget-1",()=>{
    test("test case 1 {min:0 max:10 step:1 value:4 output:4}",()=>{
        render(<Widget1 min={0} max={10} step={1}/>)
        fireEvent.change(screen.getByRole('slider'),{target:{value:'4'}})
        expect(screen.getByTestId('progressText')).toHaveTextContent("4")
    })

    test("test case 2 {min:6 max:34 step:3 value:12 output:12}",()=>{
        render(<Widget1 min={6} max={34} step={3}/>)
        fireEvent.change(screen.getByRole('slider'),{target:{value:'12'}})
        expect(screen.getByTestId('progressText')).toHaveTextContent("12")
        
    })
})