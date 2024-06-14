import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/router'
// import DrawerNew from './components/Home/DrawerNew'


function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
