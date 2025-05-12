import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
min-height: 292px;
min-width: 210px;

flex: 0 0 auto;
position: relative;
width: 210px;
padding: 24px;
margin-top: 24px;
margin-bottom: 24px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${({theme})=>theme.COLORS.DARK_200};
border-radius: 12px;
button:nth-child(1){
    cursor: pointer;
    border: none;
}

img {
    width: 88px;
    height: 88px;
}

img:first-child {
    width: 24px;
    height: 22px;
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;

}

h1 {
    margin-top: 12px;
    font-family: "Poppins";
    color: ${({theme})=>theme.COLORS.LIGHT_300};
    font-size: 14px;
    font-weight: 100;
}
p{
    display: none;
}

span {
    margin-top: 12px;
    color: ${({theme})=>theme.COLORS.CAKE_100};
    font-family: "Roboto";
}
div{
    display: flex;
    gap: 4px;

    button {
        cursor: pointer;

        margin-top: 12px;
        border: none;
        background-color: transparent;
        color: ${({theme})=>theme.COLORS.LIGHT_100};
        width: 24px;
        height: 24px;
    }
    span {
        color: ${({theme})=>theme.COLORS.LIGHT_300};
        font-size: 16px;
        font-family: "Roboto";
    }
}
button {
    margin-top: 16px;
}

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 19rem;
    img{
        width: 11rem;
        height: 11rem;
    }
    h1 {
    margin-top: 0.93rem;
    font-size: 1.5rem;
    font-weight: 300;

}
p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.87rem;
    margin-top: 0.94rem;
    color: ${({theme})=>theme.COLORS.LIGHT_400};
    font-family: "Roboto";
}
span{
    font-size: 1.8rem;
    margin-top: 0.94rem;
}
div{

align-items: center;
    button {
        width: 24px;
        height: 24px;  
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        font-size: 1.25rem;
        font-weight: bolder;
    }
}
}
`;