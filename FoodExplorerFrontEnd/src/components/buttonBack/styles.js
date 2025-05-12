import styled from "styled-components";

export const Container = styled.button`
display: flex;
align-items: center;
width: 100%;
background: none;
border: none;
color: ${({theme})=>theme.COLORS.LIGHT_300};
cursor: pointer;
p {
    font-family: "Poppins";
}
`