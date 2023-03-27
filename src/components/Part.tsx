import styled from "styled-components";
import { Icon } from "@iconify/react";
import color from "../util/color";

const { green, sky, purple, yellow, pink, brown } = color;

const Part = () => {
  return (
    <Container>
      <MorningBox>
        <MorningText>
          <TextBox>아침</TextBox>
        </MorningText>
        <MorningPartBox>
          <UserBox>
            <UserNametxt>수진&nbsp;</UserNametxt>
            <UserDeletebtn>
              <Icon icon="ic:round-close" />
            </UserDeletebtn>
          </UserBox>
        </MorningPartBox>
      </MorningBox>
      <EveningBox>
        <EveningText>
          <TextBox>저녁</TextBox>
        </EveningText>
        <EveningPartBox>
          <UserBox>
            <UserNametxt>수진&nbsp;</UserNametxt>
            <UserDeletebtn>
              <Icon icon="ic:round-close" />
            </UserDeletebtn>
          </UserBox>
        </EveningPartBox>
      </EveningBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextBox = styled.div`
  margin: auto;
`;

const MorningBox = styled.div`
  display: flex;
  height: 75px;
`;

const MorningText = styled.div`
  display: flex;
  text-align: center;
  width: 30px;
`;

const MorningPartBox = styled.div`
  margin: auto 0 auto 15px;
`;

const EveningBox = styled.div`
  display: flex;
  height: 75px;
`;

const EveningText = styled.div`
  display: flex;
  text-align: center;
  width: 30px;
`;

const EveningPartBox = styled.div`
  margin: auto 0 auto 15px;
`;

const UserBox = styled.div`
  width: 60px;
  height: 32px;
  display: flex;
  background-color: ${yellow};
  border-radius: 10px;
`;

const UserNametxt = styled.div`
  margin: auto 0 auto 7px;
`;

const UserDeletebtn = styled.div`
  display: flex;
  margin: auto 0;
`;

export default Part;
