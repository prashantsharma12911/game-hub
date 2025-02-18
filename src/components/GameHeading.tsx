import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres';

interface Props{
    gameQuery : GameQuery;
}

const GameHeading = ({gameQuery} : Props) => {
    const {data } = useGenres();
    const genre = data.results.find(genre => genre.id === gameQuery.genreId);
    const heading = `${genre?.name || ''} ${gameQuery.platform?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5}>
      {heading}
    </Heading>
  )
}

export default GameHeading
