import styled, { css } from "styled-components";

type ContainerProps = {
  selected: boolean;
  even: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ selected, even }) => css`
    width: 100%;
    max-width: 272px;
    height: 100%;
    max-height: ${selected ? "139px" : " 128px"};
    background-color: ${even ? "#451475" : " #00173d"};
    background-image: url("/images/oval.png");
    background-repeat: no-repeat;
    background-position: bottom left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    align-items: center;
    align-content: center;
    padding: 15px 20px;
    color: #fefefe;
    position: relative;
  `}
`;

export const TextWrapper = styled.div`
  h1 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }

  h2 {
    font-family: "SFProDisplay";
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 30px;
  }
`;

export const ImgWrapper = styled.div`
  justify-self: flex-end;
  position: relative;
`;

export const BookCover = styled.img`
  border-radius: 5px;
  max-width: 72px;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "SFProDisplay";
  font-size: 10px;

  img {
    margin-right: 3px;
  }
`;

export const CircleDetail = styled.img`
  position: absolute;
  left: -40px;
  top: 0px;
`;

export const StickDetail = styled.img`
  position: absolute;
  right: 60px;
  top: 80px;
`;

export const TriangleDetail = styled.img`
  position: absolute;
  width: 32px;
  right: 50px;
  top: -10px;
`;
