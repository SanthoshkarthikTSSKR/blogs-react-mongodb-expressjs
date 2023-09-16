import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import EditBlog from './pages/EditBlog';
import CreateBlog from './pages/CreateBlog';
import { BlogProvider } from "./MyContext";
import { Link } from 'react-router-dom';
import Alert from './components/alert';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog/:slug",
    element: <div><div className="max-w-sm p-6"><Link className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to={`/`}>Back To Home</Link></div><BlogPage /></div>,
  },
  {
    path: "/blog/edit/:slug",
    element: <div><div className="max-w-sm p-6"><Link className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to={`/`}>Back To Home</Link></div><EditBlog /></div>,
  },
  {
    path: "/blog/create",
    element: <div><div className="max-w-sm p-6"><Link className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to={`/`}>Back To Home</Link></div><CreateBlog /></div>,
  }
]);

function App() {
  return <div className="container mx-auto bg-blue-200 rounded-xl shadow border p-8 m-10"><BlogProvider><Alert /><RouterProvider router={router} /></BlogProvider></div>
}

export default App;