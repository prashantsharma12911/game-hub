import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
  limit: number;
}
const Expandable = ({ children, limit }: Props) => {
  if (!children) {
    return null;
  }

  const [expanded, setExpanded] = useState(false);

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = children.substring(0, limit);

  return (
    <Text onClick={() => setExpanded(!expanded)}>
      {expanded ? children : summary + " ..."}{" "}
      {
        <Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={1}>
          {expanded ? "Show less" : "Show More"}
        </Button>
      }
    </Text>
  );
};

export default Expandable;
