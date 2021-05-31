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
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 42px;
  grid-gap: 20px;
  color: rgba(49, 49, 49, 0.8);
  margin-bottom: 30px;
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
