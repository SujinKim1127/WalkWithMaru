import styled from "styled-components";
import { Icon } from "@iconify/react";
import color from "../util/color";

const { green, sky, purple, yellow, pink, brown } = color;

export interface OProps {
  isOpen: boolean;
  setIsOpen: (classname: boolean) => void;
}

const MemberModal = ({ isOpen, setIsOpen }: OProps) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <NameBox>
                <div className="name">이름</div>
                <input></input>
              </NameBox>
              <ColorBox>
                <div className="txt">색상</div>
                <div className="color">
                  <ColorEach color={sky} />
                  <ColorEach color={green} />
                  <ColorEach color={purple} />
                  <ColorEach color={yellow} />
                  <ColorEach color={pink} />
                  <ColorEach color={brown} />
                </div>
              </ColorBox>
            </ModalContent>
            <ModalBtns>
              <button className="cancel" onClick={() => setIsOpen(!isOpen)}>
                완료
              </button>
            </ModalBtns>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  width: 250px;
  height: 160px;
  background-color: white;
  &.fail {
    height: 120px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding: 20px 0;
  padding-top: 40px;
  margin: 0 20px;
  &.fail {
    border: none;
  }
`;

const NameBox = styled.div`
  display: flex;
  div.name {
    margin-right: 5px;
  }
  input {
    width: 100px;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
  }

  input:focus {
    outline: none;
  }
`;

const ColorBox = styled.div`
  display: flex;

  margin-top: 30px;

  div.txt {
  }

  div.color {
    display: flex;
    margin-left: 5px;
  }
`;

const ColorEach = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 7px;
  background-color: ${(props) => (props.color ? props.color : "gray")};
  cursor: pointer;
`;

const ModalBtns = styled.div`
  display: flex;
  flex-direction: row-reverse;
  button {
    margin: 0 10px;
    border: none;
    font-size: 12px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
    background-color: transparent;
    color: #0085ff;
  }
`;

export default MemberModal;
