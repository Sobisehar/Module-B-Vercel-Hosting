import React, { useState }  from 'react'
import Signin from './Signin'
import Signup from './Signup'
import './App.css'

const App=() =>{
  const [islog, setlog] = useState(true)
  const toggle = () =>{
    setlog(!islog)
  }

  return (
      <div>
        { 
        islog ? <Signup func={toggle} /> : <Signin func={toggle} />
        } 
      </div> 
  )
}

export default App

