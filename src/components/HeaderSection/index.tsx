import * as S from "./styles";

type HeaderSectionProps = {
  title: string;
  link: string;
};

export function HeaderSection({ title, link }: HeaderSectionProps) {
  return (
    <S.CategoryTitle>
      <h1>{title}</h1>
      <a href="#">{link}</a>
    </S.CategoryTitle>
  );
}
