import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                Order by: Relevance
            </MenuButton>
            <MenuList>
            <MenuItem onClick={() => console.log('clicled')}>Relevance</MenuItem>
            <MenuItem onClick={() => console.log('clicled')}>Date Added</MenuItem>
            <MenuItem onClick={() => console.log('clicled')}>Name</MenuItem>
            <MenuItem onClick={() => console.log('clicled')}>Release Date</MenuItem>
            <MenuItem onClick={() => console.log('clicled')}>Popularity</MenuItem>
            <MenuItem onClick={() => console.log('clicled')}>Average Rating</MenuItem>
            </MenuList>
        </Menu>
      )
}

export default SortSelector