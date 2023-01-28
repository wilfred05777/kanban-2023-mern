import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import Board from './pages/Board'
import Signup from './pages/Signup'
import Login from './pages/Login'

import './App.css'
import AppLayout from './layout/AppLayout'

const App = () => {
  const theme = createTheme({
    palette: { mode: 'light' }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine>
        <BrowserRouter>
          {/* <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} /> */}
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </Route>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path='boards' element={<Home />} />
              <Route path='boards/:boardId' element={<Board />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseLine>
    </ThemeProvider>
  )
}

export default App
