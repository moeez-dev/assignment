import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './components/frontPage/FrontPage'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'
import Page5 from './components/page5/Page5'
import Page6 from './components/page6/Page6'
import Page7 from './components/page7/Page7'
import Page8 from './components/page8/Page8'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/page5' element={<Page5 />} />
        <Route path='/page6' element={<Page6 />} />
        <Route path='/page7' element={<Page7 />} />
        <Route path='/page8' element={<Page8 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
