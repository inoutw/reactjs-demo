import React from 'react'
import 'services/transformSize'
import { LoginProvider } from 'modules/user/LoginContext'
import { RouterProvider } from 'services/route'
import modules from 'modules'

const App: React.FC = () => {
  return (
    <LoginProvider>
      <RouterProvider modules={modules}></RouterProvider>
    </LoginProvider>
  )
}

export default App
