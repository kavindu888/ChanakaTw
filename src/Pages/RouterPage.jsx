import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeOne from './HomeOne'
import About from './About'
import LoadTop from '../Components/LoadTop'
import Destination from './Destination'
import DestinationDetails from './DestinationDetails'
import Faq from './Faq'
import Error from './Error'
import Contact from './Contact'
import Open from './Open'
function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
          <Route path="/open" element={<Open/>}></Route> 
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage