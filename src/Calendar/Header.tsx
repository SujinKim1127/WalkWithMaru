import { addMonths, format, subMonths } from "date-fns";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export interface MProps {
  currentMonth: Date;
  setCurrentMonth: (classname: Date) => void;
}

const Header = ({ currentMonth, setCurrentMonth }: MProps) => {
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Container>
      <DateBox>
        <span className="textdate">
          {format(currentMonth, "yyyy")}년 &nbsp; {format(currentMonth, "M")}월
        </span>
      </DateBox>
      <ArrowBox>
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          onClick={prevMonth}
        />
        <Icon
          icon="material-symbols:arrow-forward-ios-rounded"
          onClick={nextMonth}
        />
      </ArrowBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 10px 0 15px;
  margin-bottom: 10px;
`;

const DateBox = styled.div`
  font-weight: 800;
`;

const ArrowBox = styled.div`
  margin-left: auto;
`;

export default Header;
