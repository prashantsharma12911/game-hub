import { Icon, Image } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { GiArcheryTarget } from "react-icons/gi";
import { GoThumbsup } from "react-icons/go";
import { SlGameController } from "react-icons/sl";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (!rating) return null;
  const emojiMap: { [key: number]: IconType } = {
    3: GiArcheryTarget,
    4: GoThumbsup,
    5: SlGameController,
  };
  if (rating < 3) return null;
  return <Icon as={emojiMap[rating]} boxSize="15px" />;
};

export default Emoji;
