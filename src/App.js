import React from "react";
import "./styles.css";
import Form from "./Form";
import { Title } from "./Title";
import { Theme } from "./Theme";
const movies = [
  {
    name: "Avengers",
    availableTickets: 3
  },
  {
    name: "Terminator",
    availableTickets: 4
  }
];

export default function App() {
  const [theme, setTheme] = React.useState("avengers");

  return (
    <Theme theme={theme}>
      <Title> Movies</Title>
      {movies.map((movie, index) => (
        <Form {...movie} key={index} updateTheme={() => setTheme(movie.name)} />
      ))}
    </Theme>
  );
}
