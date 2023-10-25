import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
import Layout from './common/Layout'
import Home from './pages/Home'
import Place, {action as placeAction}from "./pages/Place"
import "./App.css"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route 
            path='place' 
            element={<Place />}
            action={placeAction}>
        </Route>
    </Route>
    
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
