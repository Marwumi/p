import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Mainlayout = ({ children}) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
  return <> {children}
      
    </>
}

export default Mainlayout
