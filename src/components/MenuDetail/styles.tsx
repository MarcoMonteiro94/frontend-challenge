import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: 10;
  padding: 0 20px;
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  height: 60px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bfbebf;
  position: relative;

  p {
    font-family: "SFProDisplay";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #3f4043;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    filter: brightness(0) saturate(100%) invert(83%) sepia(5%) saturate(27%)
      hue-rotate(251deg) brightness(93%) contrast(89%);
  }

  &:focus {
    filter: brightness(0) saturate(100%);
  }

  & + & {
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: rgba(151, 151, 151, 0.2);
      left: -26px;
    }
  }
`;
