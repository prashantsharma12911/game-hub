import React from 'react'
import logo from '../assets/logo.jpg'
import { HStack, Icon, Image, Text } from '@chakra-ui/react'
import ColorModeSwithch from './ColorModeSwitch'
import { SlGameController } from "react-icons/sl";
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Icon as={SlGameController} boxSize='60px'></Icon>
      </Link>
      <SearchInput />
      <ColorModeSwithch></ColorModeSwithch>
    </HStack>
  )
}

export default Navbar
