import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <S.MenuItem>
        <img src="/images/home.svg" alt="Home" />
        <p>Home</p>
      </S.MenuItem>
      <S.MenuItem>
        <img src="/images/book.svg" alt="Book" />
        <p>Libraries</p>
      </S.MenuItem>
      <S.MenuItem>
        <img src="/images/user.svg" alt="Person" />
        <p>Profile</p>
      </S.MenuItem>
    </S.Container>
  );
}
