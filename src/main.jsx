import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Body/Home/Home';
import Catagory from './components/Body/Catagory/Catagory';
import { customLoader } from './Loader/CustomLoader';
import JobDetails from './components/Body/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: customLoader
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch('/jobsData.json')
        // loader: customLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
