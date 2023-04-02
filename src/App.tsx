import { useState } from "react";
import "./App.css";
import Calendar from "./Calendar/Calendar";
import Member from "./components/Member";
import Part from "./components/Part";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <Calendar
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Part selectedDate={selectedDate} />
      <Member selectedDate={selectedDate} />
    </div>
  );
}

export default App;
