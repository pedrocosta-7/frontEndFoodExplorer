import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
display: flex;
min-width: 100%;
padding: 29.4px 27.7px;
background-color: ${({theme})=>theme.COLORS.DARK_700};display: flex;
align-items: center;
justify-content: center;
gap: 8px;
p {
    color: ${({theme})=>theme.COLORS.LIGHT_200};
    font-size: 12px;
    font-family: "DM Sans", sans-serif;
}

div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    color: ${({theme})=>theme.COLORS.LIGHT_700};
    font-family: "Roboto";
    gap: 6.5px;
    h2 {
        font-size: 15.26px;
    }
}
img {
    width: 22px;
    height: 18px;
}
@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
justify-content: space-between;

padding-right: 5.5rem;
padding-left: 5.5rem;
p{
    font-size: 1rem;
}
div {
    h2 {
        font-size: 1.5rem;
    }
}
}
`