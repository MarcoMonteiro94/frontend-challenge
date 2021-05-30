import { HeaderSection } from "../HeaderSection";
import * as S from "./styles";

export function ReviewCategory() {
  return (
    <S.Container>
      <HeaderSection title="Reviews of The Days" link="All Video" />
      <S.ImgWrapper>
        <img src="/images/review-img.png" alt="Review" />
      </S.ImgWrapper>
    </S.Container>
  );
}
