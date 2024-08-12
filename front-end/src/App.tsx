import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

function App() {

  return (
     <div className='h-full w-full'>
        <RouterProvider router={Router} />
     </div>
  )
}

export default App
