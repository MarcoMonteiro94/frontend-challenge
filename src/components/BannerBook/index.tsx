import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { SEARCH_BOOK } from "../../services/api";
import { BookProps, ModalProps } from "../../types";
import * as S from "./styles";

type BannerBookProps = {
  id: string;
  selected: boolean;
  even: boolean;
};

export function BannerBook({
  id,
  selected,
  even,
  setBookId,
  setModal,
}: BannerBookProps & ModalProps) {
  const [book, setBook] = useState<BookProps>({} as BookProps);
  const { request } = useFetch();

  useEffect(() => {
    async function getBook() {
      if (id.length > 0) {
        const { url, options } = SEARCH_BOOK(id);
        try {
          const { json } = await request(url, options);
          setBook(json);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getBook();
  }, []);

  if (book) {
    return (
      <S.Container selected={selected} even={even}>
        <S.TextWrapper>
          <div>
            {book.volumeInfo?.title.length > 7 ? (
              <h1 style={{ fontSize: "20px" }}>
                {book.volumeInfo.title.substring(0, 7)}...
              </h1>
            ) : (
              <h1>{book.volumeInfo?.title}</h1>
            )}
            <h2>{book.volumeInfo?.authors[0]}</h2>
          </div>
          <S.StatisticsWrapper>
            <img src="/images/counter.svg" alt="Contador" />
            <p>
              <b>120+</b> Read Now
            </p>
          </S.StatisticsWrapper>
        </S.TextWrapper>
        <S.ImgWrapper>
          <S.CircleDetail src="/images/oval-reading-1.svg" alt="Circle" />
          <S.StickDetail src="/images/stick.svg" alt="Stick" />
          <S.TriangleDetail src="/images/triangle.svg" alt="Triangle" />
          <div
            onClick={() => {
              setBookId(id);
              setModal(true);
            }}
          >
            <S.BookCover
              src={
                book.volumeInfo?.imageLinks
                  ? book.volumeInfo?.imageLinks?.thumbnail
                  : "/images/cover-404.png"
              }
              alt="Book"
            />
          </div>
        </S.ImgWrapper>
      </S.Container>
    );
  } else {
    return <></>;
  }
}
