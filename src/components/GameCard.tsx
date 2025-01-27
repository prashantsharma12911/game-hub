import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import breoken_image from '../assets/broken_image.webp';

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card  >
      <Image src={game.background_image === null ? breoken_image  : game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
