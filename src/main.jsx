import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// Routes
import Intro from './route/intro'
import ErrorPage from './error'
import Root, {loader as rootLoader} from './route/root'
import Users from './route/user'
import Channel from './route/Channel'
import Contact from './route/contact'
import ChatBox from './route/Chatbox'
import Index from './route/Index'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Intro />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/app',
    element: <Root />,
    loader: rootLoader,
    children: [
      {index: true, element: <Index />},
      { 
        path: '/app/user',
        element: <Users />,
        errorElement: <ErrorPage />,
      },
      { 
        path: '/app/contact',
        element: <Contact />,
      },
      {
        path: '/app/channel/',
        element: <Channel />,
        children: [
          {
            path: '/app/channel/:id',
            element: <ChatBox />
          }
        ]
      },
      
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)