import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Icon, Image, Text } from '@chakra-ui/react'
import ColorModeSwithch from './ColorModeSwitch'
import { IoGameControllerSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Icon as={IoGameControllerSharp} boxSize= '60px'></Icon>
        <ColorModeSwithch></ColorModeSwithch>
    </HStack>
  )
}

export default Navbar
