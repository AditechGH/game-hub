import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMOdeSwitch from './ColorMOdeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ( {onSearch}: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch} />
        <ColorMOdeSwitch />
    </HStack>
  )
}

export default NavBar