import "./styles.css";
import Form from "./Form";
const movies = [
  {
    name: "spider man",
    availableTickets: 3
  },
  {
    name: "Irom man",
    availableTickets: 4
  },
  {
    name: "Batman",
    availableTickets: 5
  }
];

export default function App() {
  return (
    <div>
      <h2> Movies </h2>
      {movies.map((movie, index) => (
        <Form {...movie} key={index} />
      ))}
    </div>
  );
}
