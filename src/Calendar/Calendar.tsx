import { useState } from "react";
import styled from "styled-components";
import Cells from "./Cells";
import Days from "./Days";
import Header from "./Header";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <Container>
      <WholeBox>
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Days />
        <Cells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
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
