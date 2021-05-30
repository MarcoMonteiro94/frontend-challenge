import * as S from "./styles";

export function MenuDetail() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MenuItem>
          <img src="/images/book-open.svg" alt="Book Open" />
          <p>Read</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="/images/headphones.svg" alt="Headphone" />
          <p>Listen</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="/images/share.svg" alt="Share button" />
          <p>Share</p>
        </S.MenuItem>
      </S.Wrapper>
    </S.Container>
  );
}
