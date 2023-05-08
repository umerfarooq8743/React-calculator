import React, { useEffect, useRef } from 'react'
import './Header.css'
const Header = () => {
    const resultRef=useRef()
    useEffect( ()=>{
        resultRef.current.scrollIntoView()
    },[])
  return (
    <div className='header custom-scroll'>
        <div className="header_history">
        <p>21212</p>
        <p>21212</p>
        <p>1212</p>
        <p>21212</p>
       
        </div>
        <br />
       <div className="header_expression custom-scroll">
        <p>3+52523</p>
       </div>
       <p ref={resultRef} className="header_result">
        123
       </p>
    </div>
  )
}

export default Header