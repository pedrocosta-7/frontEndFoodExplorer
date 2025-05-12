import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;


  font-family: "Poppins";
  font-weight: 200;
  font-size: 24px;
  color: ${({theme})=>theme.COLORS.LIGHT_100};

  border-bottom-width: 0.7px;
  border-bottom-style: solid;
  border-bottom-color: #6E6E6E ;

  text-align: left;
  cursor: pointer;

  padding-bottom: 8px;
  padding-left: 10px;

`

