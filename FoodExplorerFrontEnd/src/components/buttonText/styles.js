import styled from "styled-components";

export const Container = styled.button`
background-color: transparent;
color: ${({theme})=>theme.COLORS.LIGHT_100};
border: none;
font-size: 14px;
margin-top: 32px;
font-family: "Poppins";
width: 100%;
cursor: pointer;
`;