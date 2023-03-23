import styled from "styled-components";

const Days = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>
    );
  }
  return <Container>{days}</Container>;
};

const Container = styled.div`
  display: flex;
  .col {
    width: 50px;
  }
  margin-bottom: 10px;
  font-size: 14px;
`;

export default Days;
