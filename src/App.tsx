import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { DisplayTodo } from "./components/DisplayTodo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <AddTodo />
      <DisplayTodo />
      <Footer />
    </>
  );
}

export default App;
