import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Icon, Image, Text } from '@chakra-ui/react'
import ColorModeSwithch from './ColorModeSwitch'
import { IoGameControllerSharp } from "react-icons/io5";
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack padding='10px'>
        <Icon as={IoGameControllerSharp} boxSize= '60px'></Icon>
        <SearchInput/>
        <ColorModeSwithch></ColorModeSwithch>
    </HStack>
  )
}

export default Navbar
