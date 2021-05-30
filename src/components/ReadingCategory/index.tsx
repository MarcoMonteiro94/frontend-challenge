import { ModalProps } from "../../types";
import { HeaderSection } from "../HeaderSection";
import * as S from "./styles";

export function ReadingCategory({ setBookId, setModal }: ModalProps) {
  return (
    <S.Container>
      <HeaderSection title="Currently Reading" link="All" />
      <S.Wrapper>
        <img
          src="/images/originals-book.png"
          alt="Originals"
          onClick={() => {
            setBookId("eLRhDgAAQBAJ");
            setModal(true);
          }}
        />
        <S.WrapperOval>
          <S.OvalDetail src="/images/oval-reading.png" alt="Oval Detail" />
        </S.WrapperOval>
        <S.WrapperCircle>
          <S.CircleDetail src="/images/oval-reading-1.svg" alt="Circle" />
        </S.WrapperCircle>
        <S.WrapperStick>
          <S.StickDetail src="/images/stick.svg" alt="Stick" />
        </S.WrapperStick>
        <S.InfoWrapper>
          <S.TitleWrapper>
            <h1>Originals</h1>
            <h2>by Adam Grant</h2>
          </S.TitleWrapper>
          <S.CounterWrapper>
            <img src="/images/small-book.svg" alt="Book" />
            <p>
              Chapter <b>2</b> From 9
            </p>
          </S.CounterWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
