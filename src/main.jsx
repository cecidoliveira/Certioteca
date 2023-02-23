import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Global } from './Global'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
