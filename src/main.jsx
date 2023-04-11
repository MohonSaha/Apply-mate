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
import Cart from './components/Body/Cart/Cart';
import ErrorPage from './components/Body/ErrorPage/ErrorPage';
import Statistics from './components/Body/Statistics/Statistics';
import Blog from './components/Body/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: customLoader
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/jobsData.json')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: customLoader
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
