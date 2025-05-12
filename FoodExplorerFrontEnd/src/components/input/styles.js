import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;

label {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-family: "Roboto", sans-serif;
}

input {
    padding: 16px 14px;
    border-radius: 8px;
    border: none;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    cursor: pointer;
    width: 100%;
    color: white;
    font-family: "Roboto", sans-serif;
}

div {
    display: flex;
    align-items: center;
}
`;