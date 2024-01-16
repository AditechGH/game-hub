import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMOdeSwitch from './ColorMOdeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <ColorMOdeSwitch />
    </HStack>
  )
}

export default NavBar