import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwithch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src= {logo} boxSize= '60px'></Image>
        <ColorModeSwithch></ColorModeSwithch>
    </HStack>
  )
}

export default Navbar
