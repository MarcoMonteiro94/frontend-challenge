import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  margin-top: 50px;
  max-width: 385px;
  width: 100%;

  &:before {
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
`;
