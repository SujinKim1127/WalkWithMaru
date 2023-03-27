import styled from "styled-components";
import { Icon } from "@iconify/react";
import color from "../util/color";

const { green, sky, purple, yellow, pink, brown } = color;

const Member = () => {
  return (
    <Container>
      <HeaderBox>
        <TitleBox>담당자</TitleBox>
        <PlusBox>
          <Icon icon="ic:round-plus" />
        </PlusBox>
      </HeaderBox>
      <MemberBox>
        <UserBox>
          <UserNametxt>수진&nbsp;</UserNametxt>
          <UserPlusbtn>
            <Icon icon="ic:round-plus" />
          </UserPlusbtn>
        </UserBox>
      </MemberBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  border-top: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  display: flex;
  margin-right: auto;
  margin-top: 20px;
`;

const TitleBox = styled.div``;

const PlusBox = styled.div`
  display: flex;
  text-align: center;
  margin: auto 0 auto 5px;
`;

const MemberBox = styled.div`
  margin-top: 16px;
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

const UserPlusbtn = styled.div`
  display: flex;
  margin: auto 0;
`;

export default Member;
