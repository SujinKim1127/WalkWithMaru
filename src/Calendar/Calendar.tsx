import { useState, useEffect } from "react";
import styled from "styled-components";
import Cells from "./Cells";
import Days from "./Days";
import Header from "./Header";
import { dbService } from "../firebase";

export interface Cprops {
  currentMonth: Date;
  setCurrentMonth: (classname: Date) => void;
  selectedDate: Date;
  setSelectedDate: (classname: Date) => void;
}

const Calendar = ({
  currentMonth,
  setCurrentMonth,
  selectedDate,
  setSelectedDate,
}: Cprops) => {
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };
  const [schedule, setSchedule] = useState<any>([]);

  useEffect(() => {
    dbService.collection("days").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("newArray", newArray);
      setSchedule(newArray);
    });
  }, []);

  return (
    <Container>
      <WholeBox>
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Days />
        <Cells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
          schedule={schedule}
        />
      </WholeBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const WholeBox = styled.div``;

export default Calendar;
