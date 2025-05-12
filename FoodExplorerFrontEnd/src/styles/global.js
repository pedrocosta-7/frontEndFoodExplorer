import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
:root {
    font-size: 16px;
    @media(max-width: ${DEVICE_BREAKPOINTS.XG}){
        font-size: 13px;
    }
    @media(max-width: ${DEVICE_BREAKPOINTS.LG}){
        font-size: 11px;
    }
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 16px;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ${({theme})=>theme.COLORS.DARK_400};   
}
`