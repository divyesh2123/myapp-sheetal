import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SheetalLogin from './SheetalLogin'
import SheetalAccount from './SheetalAccount'

export default function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<SheetalLogin />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/account" element={<SheetalAccount />}/>
      </Routes>
  )
}
