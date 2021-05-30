import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 11;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 100%;
  align-content: start;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 33vh;
  background-color: #fff6e5;
  border-radius: 0px 0px 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 55px;
    left: 33px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const TextWrapper = styled.div`
  margin-top: 67px;
  padding: 0 20px;

  h1 {
    font-family: "SFProDisplay";
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "SFProDisplay";
    font-size: 16px;
    color: #ff6978;
    margin-bottom: 10px;
  }
`;

export const DescriptionWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 33vh;
  margin-bottom: 100px;

  p,
  & {
    font-family: "SFProText";
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    text-align: justify;
    color: rgba(49, 49, 49, 0.6);
  }
`;

export const CoverBook = styled.img`
  width: 150px;
  position: absolute;
  bottom: -36px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 3px 5px 0px #000000;
  box-shadow: 0px 3px 5px 0px #000000;
`;

export const CircleDetail = styled.img`
  position: absolute;
  width: 24px;
  left: 250px;
  top: 100px;
`;

export const SmallCircleDetail = styled.img`
  position: absolute;
  width: 15px;
  left: 45px;
  top: 140px;
`;

export const FullCircleDetail = styled.img`
  position: absolute;
  width: 63px;
  left: 75px;
  bottom: 95px;
`;

export const OvalDetail = styled.img`
  position: absolute;
  width: 46px;
  left: 230px;
  bottom: 10px;
`;

export const BigOvalDetail = styled.img`
  position: absolute;
  width: 100px;
  right: 0px;
  top: 0px;
`;
