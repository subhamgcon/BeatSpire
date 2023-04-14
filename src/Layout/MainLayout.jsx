import React, { Children } from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout