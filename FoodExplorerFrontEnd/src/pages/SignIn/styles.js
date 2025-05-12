import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;

>div:first-child {
    margin-bottom: 73px;
}
@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: flex;
    flex-direction: row;
    gap: 16.1rem;
}
@media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    display: flex;
    flex-direction: row;
    gap: 17.1rem;
}

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 316px;
height: fit-content;

h2{
    display: none;
}

div {
    margin-bottom: 32px;
}

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 29.7rem;
    padding: 4rem;
    background-color: ${({theme})=>theme.COLORS.DARK_700} ;
    h2 {
        display: block;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 28px;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
        margin-bottom: 32px;
    }
}


`;