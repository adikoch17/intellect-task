import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { Widget1 } from './components/widget1/Widget1';
import { Widget2 } from './components/widget2/Widget2';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Testing if Components are rendering",()=>{
  afterEach(cleanup)
  test("testing if App is rendering",()=>{
    render(<App/>)
    
  })

  test("testing if Widget-1 is rendering",()=>{
    render(<Widget1 min={0} max={10} step={1}/>)
  })

  test("testing if Widget-2 is rendering",()=>{
    render(<Widget2 values={["Very high","High","Neutral","Low","Very low"]}/>)
  })
})

