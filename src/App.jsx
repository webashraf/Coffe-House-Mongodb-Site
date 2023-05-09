import { Link, Outlet, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <h1 className='text-7xl mb-10'>Coffe House </h1>
      <div className='flex gap-10 justify-center mb-20'>
        <Link to={"/"}>Home</Link>
        <Link to={"/addcoffee"}>Add Coffee</Link>
        {/* <Link to={"/updatecoffee"}>Update Coffee</Link> */}
      </div>
      <Outlet></Outlet>
      </>
  )
}

export default App
