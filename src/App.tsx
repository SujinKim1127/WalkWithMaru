import "./App.css";
import Calendar from "./Calendar/Calendar";
import Member from "./components/Member";
import Part from "./components/Part";

function App() {
  return (
    <div className="App">
      <Calendar />
      <Part />
      <Member />
    </div>
  );
}

export default App;
