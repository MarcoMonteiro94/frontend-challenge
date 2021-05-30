import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fffcf9;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 100%;
  align-content: start;
  position: relative;

  label {
    position: relative;
    margin-top: 50px;
    max-width: 385px;
    width: 100%;
  }

  label:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url("/images/lupa.svg") center / contain no-repeat;
  }

  input {
    height: 3rem;
    width: 100%;
    padding-left: 40px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    background-color: #fdfcfc;
    color: #54565a;
    font-family: "SFProText";
  }

  > h1 {
    margin: 30px 0;
    font-size: 1.5rem;
    font-family: "SFProDisplay";
    font-weight: 400;
    color: #54565a;
    align-self: flex-start;

    b {
      color: #ff6978;
    }
  }
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 42px;
  grid-gap: 20px;
  color: rgba(49, 49, 49, 0.8);
  margin-bottom: 30px;

  img {
    max-width: 105px;
    width: 100%;
    max-height: 153px;
    height: 100%;
    margin-bottom: 9px;
    border-radius: 5px;
  }

  h1 {
    font-family: "SFProDisplay";
    font-weight: 700;
    font-size: 12px;
  }

  h2 {
    font-family: Roboto;
    font-weight: 900;
    font-size: 10px;
  }
`;

export const ButtonLoad = styled.button`
  background-color: #451475;
  padding: 1rem 0;
  grid-column: 1/4;
  border-radius: 12px;
  color: white;
  border: none;
  font-family: "SFProText";
  font-weight: bold;
  font-size: 16px;
`;

export const ErrorNotFound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "SFProText";
  font-size: 16px;
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  img {
    height: 100px;
    width: 100px;
  }
`;
