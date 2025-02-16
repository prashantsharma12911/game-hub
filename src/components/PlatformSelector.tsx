import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props{
    onSelectPlatform : (platform : Platform) => void;
    selectedPlatfrom : Platform | null;
}

const PlatformSelector = ({onSelectPlatform,selectedPlatfrom} : Props) => {
   const {data , error} = usePlatforms();

   if(error)return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
