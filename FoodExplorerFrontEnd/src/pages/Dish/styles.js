import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;

export const Content = styled.div`
width: 316px;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 16px;
color: ${({theme})=>theme.COLORS.LIGHT_300};
font-family: "Poppins";
margin-bottom: 33px;
>div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >img {
    margin-top: 16px;
    }

    >button {
    margin-top: 20.6px;
    }
}

div {
    >h1 {
    margin-top: 16px;
    font-size: 27px;
    font-weight: 400;
}

    >p {
    display: flex;
    margin-top: 16px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 400;
    }
}
@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    min-height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    
  
    margin-bottom: 3.6rem;

    gap: 2.96rem;

>div{
    width: 23.75rem;
    img{
        height: 23.75rem;
        width: 23.75rem;

    }
}
#details {
    width: 42.94rem;
    align-items: baseline;
    h1{
        font-size: 2.5rem;
    }
    p {
        font-size: 1.5rem;
        text-align: start;
    }
}
}
`;
export const Tags = styled.div`
    display: flex;
    width: 316px;
    height: fit-content;
    flex-wrap: wrap;
    row-gap: 24px;
    margin-top: 24px;

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 42.94rem;
}
`;

export const Order = styled.div`
    display: flex;
    width: 316px;
    align-items: center;
    margin-top: 48px;
    gap: 16px;
    
    div {
        display: flex;
        gap: 4.4px;
        color: ${({theme})=>theme.COLORS.LIGHT_100};

        span{
            font-size: 22.6px;
            font-family: "Roboto";
        }
        
        button {
            border: none;
            background-color: transparent;
            cursor: pointer;
    
            svg{
                width: 27px;
                height: 27px;
                color: ${({theme})=>theme.COLORS.LIGHT_100};
            }
        }
    }

`;
