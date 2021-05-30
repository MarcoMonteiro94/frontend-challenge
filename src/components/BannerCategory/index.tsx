import { BannerBook } from "../BannerBook";
import { HeaderSection } from "../HeaderSection";
import Carousel, { ItemObject } from "react-elastic-carousel";
import * as S from "./styles";
import { useState } from "react";
import { ModalProps } from "../../types";

export function BannerCategory({ setBookId, setModal }: ModalProps) {
  const [selectedCurrentItem, setSelectedCurrentItem] = useState(0);
  const bookList = [
    { id: 0, query: "R42aBAAAQBAJ" },
    { id: 1, query: "94ScMQEACAAJ" },
    { id: 2, query: "46zbI0Wa2pkC" },
    { id: 3, query: "HJa_oQEACAAJ" },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1.15 },
    { width: 375, itemsToShow: 1.3 },
  ];

  return (
    <S.Container>
      <HeaderSection title="Discover new book" link="More" />
      <S.Wrapper>
        <Carousel
          pagination={false}
          showArrows={false}
          itemsToShow={1.3}
          breakPoints={breakPoints}
          itemPosition={"START"}
          isRTL={false}
          showEmptySlots={false}
          onChange={(_, pageIndex) => {
            setSelectedCurrentItem(pageIndex);
          }}
        >
          {bookList.map((bookBanner) => (
            <BannerBook
              key={bookBanner.id}
              id={bookBanner.query}
              selected={bookBanner.id === selectedCurrentItem ? true : false}
              even={bookBanner.id % 2 !== 0 ? true : false}
              setBookId={setBookId}
              setModal={setModal}
            />
          ))}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
}
