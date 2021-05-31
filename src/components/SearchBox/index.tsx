import { Dispatch, SetStateAction } from "react";
import { BookProps } from "../../types";
import * as S from "./styles";

type SearchBox = {
  setError: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setStartItem: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setBooks: Dispatch<SetStateAction<BookProps[]>>;
};

export function SearchBox({
  setError,
  setLoading,
  setStartItem,
  setQuery,
  setBooks,
}: SearchBox) {
  return (
    <S.Container>
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
    </S.Container>
  );
}
