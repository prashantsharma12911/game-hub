import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return <Grid templateAreas={{
    base : `"nav" "main"`,
    lg : `"nav nav" "aside main"`
  }}>
      <GridItem area = "nav" bg = "coral">nav</GridItem>
      <Show above="lg">
      <GridItem area = "aside" bg = "gold">aside</GridItem>
      </Show>
      <GridItem area = "main" bg = "blue">main</GridItem>
  </Grid>
}

export default App;
