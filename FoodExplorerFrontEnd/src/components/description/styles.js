import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: "Poppins";
font-size: 15px;
color: ${({theme})=>theme.COLORS.LIGHT_300};

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    font-size: 36px;
}
`;