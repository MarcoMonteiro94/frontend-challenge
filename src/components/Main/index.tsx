import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useDebounce } from "react-use";
import { SEARCH_BOOKS } from "../../services/api";
import { Menu } from "../Menu";
import { BannerCategory } from "../BannerCategory";
import { ReadingCategory } from "../ReadingCategory";
import { ReviewCategory } from "../ReviewCategory";
import { DetailModal } from "../DetailModal";
import { Loading } from "../Loading";
import { BookProps } from "../../types";
import * as S from "./styles";

export function Main() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [query, setQuery] = useState("");
  const [bookId, setBookId] = useState("");
  const [error, setError] = useState("");
  const [startItem, setStartItem] = useState(0);
  const [infinite, setInfinite] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [wait, setWait] = useState(false);

  const { request } = useFetch();

  async function getBooks(startBook: number) {
    if (query.length > 0) {
      const { url, options } = SEARCH_BOOKS(query, startBook);
      try {
        const { json } = await request(url, options);
        setInfinite(json.totalItems);
        if (!!json.items) {
          setBooks((books) => books.concat(json.items));
        } else {
          setError("No books found");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  const [, cancel] = useDebounce(
    () => {
      setLoading(false);
      getBooks(startItem);
    },
    1000,
    [query, startItem]
  );

  function loadMore() {
    if (books.length <= infinite) {
      let newStartItem = 0;
      if (!wait) {
        newStartItem = startItem + 12;
        setStartItem(newStartItem);
        setWait(true);
        setTimeout(() => {
          setWait(false);
        }, 2000);
      }
    }
  }

  //Esconde o scroll quando o modal é aberto
  useEffect(() => {
    modal && (document.body.style.overflow = "hidden");
    !modal && (document.body.style.overflow = "unset");
  }, [modal]);

  return (
    <S.Container>
      {!!modal && (
        <DetailModal id={bookId} setBookId={setBookId} setModal={setModal} />
      )}
      {loading && <Loading />}
      <label>
        <input
          type="text"
          placeholder="Search book"
          onChange={({ target }) => {
            if (target.value.length > 0) {
              setError("");
              setLoading(true);
            }
            setStartItem(0);
            setQuery(target.value);
            setBooks([]);
          }}
        />
      </label>
      {query.length === 0 && loading === false ? (
        <>
          <h1>
            Hi, <b>Mehmed Al Fatih</b> 👋
          </h1>
          <Menu />
          <BannerCategory setBookId={setBookId} setModal={setModal} />
          <ReadingCategory setBookId={setBookId} setModal={setModal} />
          <ReviewCategory />
        </>
      ) : (
        <S.BookContainer>
          {!loading && books.length > 0
            ? books.map((book) => (
                <div
                  key={`${book.etag}${book.id}`}
                  onClick={() => {
                    setBookId(book.id);
                    setModal(true);
                    setError("");
                  }}
                >
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "/images/cover-404.png"
                    }
                    alt={book.volumeInfo.title}
                  />
                  <h1>
                    {book.volumeInfo.title.length > 15
                      ? `${book.volumeInfo.title.substring(0, 15)}...`
                      : book.volumeInfo.title}
                  </h1>
                  <h2>
                    by {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                  </h2>
                </div>
              ))
            : error && (
                <S.ErrorNotFound>
                  <p>{error}</p>
                </S.ErrorNotFound>
              )}
          {!loading && books.length > 0 && (
            <S.ButtonLoad onClick={loadMore}>
              {wait ? "Loading..." : "Load More!"}
            </S.ButtonLoad>
          )}
        </S.BookContainer>
      )}
    </S.Container>
  );
}
