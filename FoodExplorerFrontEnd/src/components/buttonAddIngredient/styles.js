import styled from "styled-components";

export const Container = styled.div`
border: ${({theme, $isnew})=> $isnew? "1px dashed" : "none solid"};
width: fit-content;
display: flex;
align-items: center;

overflow: hidden;
gap: 0;

input {
background-color: ${({theme, $isnew})=> $isnew ? "transparent" : theme.COLORS.LIGHT_600};
cursor: pointer;
border: none;
font-size: 16px;
padding: 5px 5px 5px 15px;
color: ${({theme, $isnew})=> $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100} ;
width: 90px;
border-radius: 5px 0 0 5px;

&::placeholder {
    color: ${({theme, $isnew})=> $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
}
}


button {
    background-color: ${({theme, $isnew})=> $isnew ? "transparent" : theme.COLORS.LIGHT_600};
    cursor: pointer;
    border: none;
    color: ${({theme, $isnew})=> $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    height: 28px;
    width: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0 5px 5px 0;

    
}

`