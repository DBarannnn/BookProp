import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
import Layout from './common/Layout'
import Home from './pages/Home'
import "./App.css"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}></Route>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
