import React from 'react'
import { ReactDOM } from 'react'
import { cleanup, render, screen ,fireEvent} from '@testing-library/react';
import { Widget2 } from './Widget2';


describe("Testing rendering of Widget-2 elements",()=>{
    afterEach(cleanup);
    test("Testing if Widget-2 is rendering",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
    })
    test("Testing if Svg paths are rendering",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        expect(screen.getByTestId("p1")).toBeInTheDocument()
        expect(screen.getByTestId("p2")).toBeInTheDocument()
        expect(screen.getByTestId("p3")).toBeInTheDocument()
        expect(screen.getByTestId("p4")).toBeInTheDocument()
        expect(screen.getByTestId("p5")).toBeInTheDocument()
    })
    test("Testing if value text is being rendered",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        expect(screen.getByTestId("w2value")).toBeInTheDocument()
    })
})


describe("Testing input and output of Widget-2",()=>{
    afterEach(cleanup);
    test("test case 1 {clicking 3rd button; output: Neutral}",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        fireEvent.click(screen.getByTestId("p3"))
        expect(screen.getByTestId("w2value")).toHaveTextContent("Neutral")
    })
    test("test case 2 {clicking 2nd button; output: Low}",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        fireEvent.click(screen.getByTestId("p2"))
        expect(screen.getByTestId("w2value")).toHaveTextContent("Low")
    })
    test("test case 3 {clicking 1st button; output: Very low}",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        fireEvent.click(screen.getByTestId("p1"))
        expect(screen.getByTestId("w2value")).toHaveTextContent("Very low")
    })
    test("test case 4 {clicking 4th button; output: High}",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        fireEvent.click(screen.getByTestId("p4"))
        expect(screen.getByTestId("w2value")).toHaveTextContent("High")
    })
    test("test case 5 {clicking 5th button; output: Very high}",()=>{
        render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
        fireEvent.click(screen.getByTestId("p5"))
        expect(screen.getByTestId("w2value")).toHaveTextContent("Very high")
    })
})