import React from "react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Expandable from "../components/Expandable";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log("slug ", slug?.toString());
  const { data: game, isLoading, error } = useGameDetails(slug!); // slug! means we are telling ts compiler that this slug value will never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Expandable limit={300}>{game.description_raw}</Expandable>
      <GameAttributes game={game}/>
    </>
  );
};

export default GameDetailPage;
