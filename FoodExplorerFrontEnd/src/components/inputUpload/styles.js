import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

>label {
    font-family: "Roboto";
    color: ${({theme})=>theme.COLORS.LIGHT_400};
    font-size: 16px;
}

label:nth-of-type(2) {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.LIGHT_100};

    padding: 12px 63px 12px 32px;
    background-color: ${({theme})=>theme.COLORS.DARK_800};
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    gap: 8px;
}
img {
    width: 24px;
    height: 24px;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
}
`