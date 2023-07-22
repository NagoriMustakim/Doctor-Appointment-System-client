import './App.css'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])
  return (
    <main >
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
