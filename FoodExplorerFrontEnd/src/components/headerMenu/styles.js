import styled from "styled-components";

export const Container = styled.header`
box-sizing: border-box;
width: 100%;
display: flex;
align-items: center;
gap: 16px;
padding: 57px 28px 23px 28px; 
background-color: ${({theme})=>theme.COLORS.DARK_700};

>h1 {
    font-family: "Roboto";
    font-size: 21.16px;
    font-weight: 300;
    color : ${({theme})=>theme.COLORS.LIGHT_100}
}
button{
cursor: pointer;
background-color: transparent;
border: none;

>svg {
    width: 25px;
    height: 25px;
    color : ${({theme})=>theme.COLORS.LIGHT_100}
}
}
`;