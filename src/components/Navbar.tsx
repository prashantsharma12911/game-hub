import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Icon, Image, Text } from '@chakra-ui/react'
import ColorModeSwithch from './ColorModeSwitch'
import { IoGameControllerSharp } from "react-icons/io5";
import SearchInput from './SearchInput';

interface Props{
  onSearch : (search : string) => void;
}
const Navbar = ({onSearch} : Props) => {
  return (
    <HStack padding='10px'>
        <Icon as={IoGameControllerSharp} boxSize= '60px'></Icon>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwithch></ColorModeSwithch>
    </HStack>
  )
}

export default Navbar
