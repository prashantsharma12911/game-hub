import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Platform } from '../hooks/useGame'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from "react-icons";

interface Props{
    platforms : Platform[];
}

const PlatformIconList = ({platforms} : Props) => {
    const iconsMap : {[key : string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        ios : MdPhoneIphone,
        web : BsGlobe
    }
  return (
    <HStack marginY={1}>
      {platforms.map(p => <Icon key={p.id} as={iconsMap[p.slug]} color="gray.500"/>)}
    </HStack>
  )
}

export default PlatformIconList
