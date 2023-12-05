import React from 'react'
import Signup from './Signup'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter= createBrowserRouter([
        {
            path:"/" ,
            element:<Signup/>,
        },
        {
            path:"/browse" ,
            element:<Browse/>
        }
    ])
    return (
    <div>
          <RouterProvider router={appRouter}/>
    </div>

    )


}

export default Body