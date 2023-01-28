import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../utils/authUtils'
import Loading from '../components/common/Loading'
import { Box, Container } from '@mui/material'
// import assets from '../assets'
import assets from '../assets'

const AuthLayout = () => {
  const navigate = useNavigate()
  // const location = userLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated()
      if (!isAuth) {
        setLoading(false)
      } else {
        navigate('/')
      }
    }
    checkAuth()
  }, [navigate])

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTOp: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={assets.images.logoLight}
          style={{ width: '100px' }}
          alt='app logo'
        />
        <Outlet />
      </Box>
    </Container>
  )
}

export default AuthLayout
