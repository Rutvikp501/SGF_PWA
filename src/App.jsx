import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import { Flex, Image } from '@chakra-ui/react'
import AllRoutes from './routes/AllRoutes'
import { useLocation } from 'react-router-dom'

function App() {
  const {pathname} = useLocation()
  return (
   <Flex flexDir={'column'} w={'full'} h={'100vh'}>
  
    <AllRoutes />
   </Flex>
  )
}

export default App
