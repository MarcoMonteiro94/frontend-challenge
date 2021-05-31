import { Saudation } from "../Saudation";
import { Menu } from "../Menu";
import { BannerCategory } from "../BannerCategory";
import { ReadingCategory } from "../ReadingCategory";
import { ReviewCategory } from "../ReviewCategory";

import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <Saudation name={"Mehmed Al Fatih"} />
      <Menu />
      <BannerCategory />
      <ReadingCategory />
      <ReviewCategory />
    </S.Container>
  );
}
