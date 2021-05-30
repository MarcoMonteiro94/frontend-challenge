import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 45px;
  position: relative;
  height: 151px;
  z-index: 0;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  height: 100px;
  overflow: hidden;
  /* position: relative; */
  z-index: 0;

  &::before {
    content: "";
    width: 100%;
    height: 100px;
    background-color: #eef5db;
    position: absolute;
    z-index: -1;
    left: -22px;
    border-radius: 0px 3px 3px 0px;
  }

  > img {
    position: absolute;
    z-index: 1;
  }
`;

export const InfoWrapper = styled.div`
  padding: 10px 0;
  margin-left: 96px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  h1 {
    font-family: "Playfair Display";
    font-size: 20px;
    letter-spacing: 2px;
    color: #2a2b26;
  }

  h2 {
    font-family: "Roboto";
    font-size: 10px;
    color: #74776d;
    margin-top: 5px;
    font-weight: 400;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  p {
    font-family: "SFProDisplay";
    font-size: 10px;
  }

  b {
    color: #ff6978;
  }
`;

export const WrapperOval = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: -23px;
  bottom: -52px;
  border-radius: 5px;
`;

export const OvalDetail = styled.img`
  position: absolute;
  z-index: 1;
  right: -30px;
  top: -18px;
`;

export const WrapperCircle = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: -23px;
  bottom: -52px;
  border-radius: 5px;
`;

export const CircleDetail = styled.img`
  position: absolute;
  z-index: 1;
  left: 230px;
  top: -8px;
`;

export const WrapperStick = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: -23px;
  bottom: -52px;
  border-radius: 5px;
`;

export const StickDetail = styled.img`
  position: absolute;
  z-index: 1;
  right: -23px;
  top: 65px;
`;
