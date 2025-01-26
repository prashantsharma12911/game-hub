import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data , isLoading , error } = useGenre();

  if(error) return null;
  if(isLoading) return <Spinner></Spinner>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
