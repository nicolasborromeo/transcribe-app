import './App.css'
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import TranscriptDetails from './Components/TranscriptDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TranscriptDetails/>
  }
])

function App() {
  return <RouterProvider router={router}/>

}

export default App
