import {
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
  format,
  addDays,
} from "date-fns";
import styled from "styled-components";
import color from "../util/color";

const { green, sky, purple, yellow, pink, brown } = color;

interface UserColor {
  name: string;
}

export interface CProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: any;
  schedule: any;
}

const Cells = ({
  currentMonth,
  selectedDate,
  onDateClick,
  schedule,
}: CProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formatDate = "";
  console.log("cell schedule", schedule);
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formatDate = format(day, "d");
      const cloneDay = day;
      const string = cloneDay.toDateString();
      days.push(
        <Container>
          <CellBox
            className={`
                    ${
                      !isSameDay(day, selectedDate)
                        ? "none"
                        : isSameDay(day, selectedDate)
                        ? "select"
                        : format(currentMonth, "M") !== format(day, "M")
                        ? "not-valid"
                        : "valid"
                    }`}
            onClick={() => {
              onDateClick(cloneDay);
            }}
          >
            <span
              className={`
            ${
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : !isSameDay(day, selectedDate)
                ? "none"
                : isSameDay(day, selectedDate)
                ? "textselect"
                : ""
            }`}
            >
              {formatDate}
            </span>
            <Square>
              {schedule.map((el: any) => {
                return (
                  <>
                    {string === el.day ? (
                      el.time === "morn" ? (
                        <Morning
                          name={el.name}
                          className={
                            format(currentMonth, "M") !== format(day, "M")
                              ? "text not-valid"
                              : ""
                          }
                        ></Morning>
                      ) : el.time === "even" ? (
                        <Evening
                          name={el.name}
                          className={
                            format(currentMonth, "M") !== format(day, "M")
                              ? "text not-valid"
                              : ""
                          }
                        ></Evening>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </Square>
          </CellBox>
        </Container>
      );
      day = addDays(day, 1);
    }
    rows.push(<RowBox>{days}</RowBox>);
    days = [];
  }
  return <Body className="body">{rows}</Body>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  .not-valid {
    color: white;
    display: none;
  }
  .none {
    // 오늘이 아닌 날짜
  }
  .select {
    // 오늘
    font-weight: 700;
  }
  .textselect {
    color: white;
    background-color: blue;
    border-radius: 5px;
  }
  span {
    width: 25px;
    margin: 0 auto;
    padding: 1px;
  }
`;

const CellBox = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
`;

const RowBox = styled.div`
  display: flex;
  height: 65px;
  margin-bottom: 5px;
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2px auto;
`;

const Morning = styled.div<UserColor>`
  border-radius: 4px;
  width: 20px;
  height: 10px;
  background-color: ${(props) =>
    props.name === "수진"
      ? yellow
      : props.name === "태훈"
      ? green
      : props.name === "유정"
      ? sky
      : props.name === "지은"
      ? brown
      : "gray"};
`;

const Evening = styled.div<UserColor>`
  border-radius: 4px;
  width: 20px;
  height: 10px;
  background-color: ${(props) =>
    props.name === "수진"
      ? yellow
      : props.name === "태훈"
      ? green
      : props.name === "유정"
      ? sky
      : props.name === "지은"
      ? brown
      : "gray"};
`;

const Body = styled.div`
  font-size: 12px;
`;

export default Cells;
