import { Game } from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import breoken_image from '../assets/broken_image.webp';
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {

  return (
    <Card  >
      <Image src={game.background_image === null ? breoken_image  : game.background_image} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms ? game.parent_platforms.map((p) => p.platform) : []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {<Link to={'/games/'+game.slug}>{game.name}</Link>} 
          <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
