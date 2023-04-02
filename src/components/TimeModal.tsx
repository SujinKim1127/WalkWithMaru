import { useState } from "react";
import styled from "styled-components";
import { dbService } from "../firebase";

export interface TProps {
  selectedDate: Date;
  name: String;
  isTimeOpen: boolean;
  setIsTimeOpen: (classname: boolean) => void;
}

const TimeModal = ({
  selectedDate,
  name,
  isTimeOpen,
  setIsTimeOpen,
}: TProps) => {
  console.log("name", name);

  const [morn, setMorn] = useState("morn");
  const openModalHandler = () => {
    console.log("name", name);

    setIsTimeOpen(!isTimeOpen);
  };

  const onSubmit = async () => {
    await dbService.collection("days").add({
      name: name,
      time: morn,
      day: selectedDate.toDateString(),
    });
    setMorn("morn");
  };

  return (
    <ModalContainer>
      {isTimeOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <TimeBox>
                <div className="morn" onClick={() => setMorn("morn")}>
                  아침
                </div>
                <div className="even" onClick={() => setMorn("even")}>
                  저녁
                </div>
              </TimeBox>
              <CheckBox>
                <div onClick={() => setMorn("morn")}>
                  {morn === "morn" ? "✔️" : ""}
                </div>
                <div onClick={() => setMorn("even")}>
                  {morn === "even" ? "✔️" : ""}
                </div>
              </CheckBox>
            </ModalContent>
            <ModalBtns>
              <button
                className="cancel"
                onClick={() => {
                  setIsTimeOpen(!isTimeOpen);
                  onSubmit();
                }}
              >
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
  width: 150px;
  height: 100px;
  background-color: white;
  &.fail {
    height: 120px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  padding: 20px 0 0px;
  margin: 0 20px;
  &.fail {
    border: none;
  }
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;

  div.morn {
    margin-bottom: 10px;
  }
`;

const CheckBox = styled.div`
  margin-left: 5px;
  div {
    height: 16.82px;
    margin-bottom: 10px;
  }
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

export default TimeModal;
