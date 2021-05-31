import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { MenuDetail } from "../MenuDetail";
import { SEARCH_BOOK } from "../../services/api";
import { BookProps } from "../../types";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

type BookDetailProps = {
  id: string | undefined;
};

export function BookDetail({ id }: BookDetailProps) {
  const [book, setBook] = useState<BookProps>({} as BookProps);
  const router = useRouter();
  const { request } = useFetch();

  useEffect(() => {
    async function getBook() {
      if (id !== undefined) {
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

  return (
    <S.Container>
      <S.ImgWrapper>
        <button
          onClick={() => {
            router.back();
          }}
        >
          <img src="/images/arrow-left.svg" alt="Sair" />
        </button>
        <S.BigOvalDetail src="/images/big-oval.svg" alt="Circle" />
        <S.SmallCircleDetail src="/images/small-circle.svg" alt="Circle" />
        <S.CircleDetail src="/images/oval-reading-1.svg" alt="Circle" />
        <S.FullCircleDetail src="/images/fullcircle.svg" alt="Circle" />
        <S.OvalDetail src="/images/oval-reading.png" alt="Circle" />
        <S.CoverBook
          src={
            book.volumeInfo?.imageLinks
              ? book.volumeInfo?.imageLinks?.thumbnail
              : "/images/cover-404.png"
          }
          alt={book.volumeInfo?.title}
        />
      </S.ImgWrapper>
      <S.TextWrapper>
        <h1>{book.volumeInfo?.title}</h1>
        <h2>{book.volumeInfo?.authors && book.volumeInfo.authors[0]}</h2>
        <S.DescriptionWrapper
          dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }}
        ></S.DescriptionWrapper>
      </S.TextWrapper>
      <MenuDetail />
    </S.Container>
  );
}
