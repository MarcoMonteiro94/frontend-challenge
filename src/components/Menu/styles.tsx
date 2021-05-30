import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  z-index: 10;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bfbebf;

  p {
    font-family: "SFProDisplay";
    font-size: 10px;
  }

  img {
    width: 16px;
    height: 18px;
    margin-bottom: 10px;
    filter: brightness(0) saturate(100%) invert(83%) sepia(5%) saturate(27%)
      hue-rotate(251deg) brightness(93%) contrast(89%);
  }

  &:focus {
    filter: brightness(0) saturate(100%);
  }
`;
