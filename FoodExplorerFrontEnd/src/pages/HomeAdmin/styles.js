import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`;

export const Section = styled.div`
display: flex;
margin-top: 44px;
position: relative;

#imgDesktop {
    display: none;
}

#imgMobile {
    position: absolute;
    z-index: 1;
    top: -28px;
    left: -30px;
}

div {
    
    padding: 36px 8px 22px 153px;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({theme})=>theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    h1 {
       font-size: 18px;
    }
    p {
        font-size: 12px;
    }
}
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){       
        margin-top: 16.75rem;
    div {
        padding: 5.5rem 6.25rem 5.75rem 32.37rem;

        h1 {
            font-family: "Poppins";
            font-weight: 500;
            font-size: 2.5rem;
            
        }
        p {
            font-size: 1rem;
        }
        p br {
            display: none;
        }
    }        

    #imgDesktop {
    width: 41rem;
    height: 25.75rem;
    display: block;
    position: absolute;
    z-index: 1;
    bottom: 0rem;
    left: -5.3rem;
    }

    #imgMobile {
    display: none;
    }


}
`

export const Content = styled.div`
margin-top: 62px;
margin-bottom: 25px;
display: flex;
flex-direction: column;
justify-content: center;
width: 356px;

@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 70.12rem;
}

`

export const ScrollContainer = styled.div`
position: relative;
display: flex;
gap: 16px;
scrollbar-width: thin;
overflow-x: auto; /* ou 'scroll' se quiser que a rolagem seja forçada */
-ms-overflow-style: none;  /* Para IE e Edge */
scrollbar-width: none; /* Para Firefox */

button {
    display: none;
}

div {
    min-height: 1.8rem;

}


::-webkit-scrollbar{
    display: none;
}




.scrollLeft {
position: absolute;
top: 50%;
left: 2.42rem;
z-index: 1;
position: sticky;
height: 1.72rem;
width: 0.94rem;

background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.75;
}
.scrollRight {
position: absolute;
top: 50%;
right: 1.92rem;
z-index: 2;
position: sticky;
height: 1.72rem;
width: 0.94rem;

background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.75;

}
@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    button {
        display: block;
    }
}
`;