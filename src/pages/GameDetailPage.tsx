import React from "react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Expandable from "../components/Expandable";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log("slug ", slug?.toString());
  const { data: game, isLoading, error } = useGameDetails(slug!); // slug! means we are telling ts compiler that this slug value will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Expandable limit={300}>{game.description_raw}</Expandable>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
