import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;

export const Form = styled.form`
margin-top: 11px;
margin-bottom: 53px;

display: flex;
flex-direction: column;
justify-content: center;
gap: 24px;
min-height: 71vh;

width: 364px;

#descriptionLineOne{
    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;

        button {
            cursor: pointer;
        }
    }
}
#descriptionLineTwo{
    display: flex;
    flex-direction: column;
    gap: 24px;
    div {
        p {
            margin-bottom: 24px;
        }
    }
}


.buttonType {
    display: flex;
    border: none;
    justify-content: space-between;
    padding: 13px 16px;
    background-color: ${({theme})=>theme.COLORS.DARK_900};
    border-radius: 8px;
    align-items: center;

    p {
        font-family: "Roboto";
        font-size: 14px;
    }
}

h1{
    color: ${({theme})=>theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-weight: 500;
}

p {
    font-family: "Roboto";
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
}

textarea {
    height: 172px;
    background-color: ${({theme})=>theme.COLORS.DARK_800};
    border: none;
    border-radius: 8px;
    padding: 14px 14px;


    color: ${({theme})=>theme.COLORS.LIGHT_300};
    font-size: 16px;
}
textarea::placeholder {

    color: ${({theme})=>theme.COLORS.LIGHT_500};
    font-family: "Roboto";
    font-size: 16px;

}

#buttonSave{
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    font-family: "Poppins";
    font-size: 14px;

    background-color: ${({theme})=>theme.COLORS.TOMATO_400};
    padding: 12px 120px;
    border: none;
    border-radius: 8px;
}
@media(min-width: ${DEVICE_BREAKPOINTS.MD}){
   width : 70rem ;

   #descriptionLineOne{
    display: grid ;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    align-items: center;

    .previewWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
}
#descriptionLineTwo{
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 2rem;

    align-items: end;
}
#buttonSave{
    width: 172px;
    margin-left: auto;
    padding: 12px 24px;
    



}

}
`;

export const Ingredients = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;
padding: 8px 8px 8px 8px;
background-color: ${({theme})=>theme.COLORS.DARK_800};


`