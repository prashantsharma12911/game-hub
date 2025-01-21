import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Image, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <HStack>
        <Image src= {logo} boxSize= '60px'></Image>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar
