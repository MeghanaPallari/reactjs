import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CompA from './useContext/CompA'
// import External from './styles/External'
// import Ref from './useRef/Ref'
// import List from './list-keys/List' 

// import './index.css'
// import State from './state/State.jsx'
// import Inline from './styles/Inline.jsx'
//import Cbc from './components/Cbc.jsx'
//import Demo from './components/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import "../src/styles/globally.css"
// import Comp1 from './styles/Comp1'
// import Comp2 from './styles/Comp2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Cbc/>}
    {/* <Demo/> */}
    {/* <Parent/> */}
    {/* <Inline/> */}
    {/* <State/> */}
    {/* <Comp1/>
    <Comp2/> */}
    {/* <External/> */}
    {/* <Ref /> */}
    {/* <List /> */}
    <CompA/>

  </StrictMode>,
)