import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props{
    gameQuery : GameQuery;
}

const GameHeading = ({gameQuery} : Props) => {
    const {data : genres } = useGenres();
    const genre = genres.results.find(genre => genre.id === gameQuery.genreId);

    const {data : platforms} = usePlatforms();
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

    const heading = `${genre?.name || ''} ${platform?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5}>
      {heading}
    </Heading>
  )
}

export default GameHeading
