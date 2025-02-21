import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>OOps</Heading>
      {
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Url "
            : "An unexpected error occured"}
        </Text>
      }
    </>
  );
};

export default ErrorPage;
