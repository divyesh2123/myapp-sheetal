import React, { useState } from 'react'
import LanContex from './LanguageContext';
import LanguageForm from './LanguageForm';
import NavBar from './NavBar';
import EmployeeA from './EmployeeA';

export default function MyApp() {
  const [lan,setlan] = useState('en');
  return (
    <LanContex.Provider value={{lan,setlan}}>

<NavBar/>

<EmployeeA/>
        <LanguageForm/>

    </LanContex.Provider>
  )
}
