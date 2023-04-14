import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom'
import ArtistPage from './Pages/ArtistPage'
import MusicPage from './Pages/MusicPage'
import CollectionsPage from './Pages/CollectionsPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'artist',
        element: <ArtistPage />,
    },
    {
        path: 'music',
        element: <MusicPage />,
    },
    {
        path: 'collections',
        element: <CollectionsPage />,
    },
    
]);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <RouterProvider router={router} />
);