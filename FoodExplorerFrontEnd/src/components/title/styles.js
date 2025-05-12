import styled from "styled-components";


export const Container = styled.div`
    width: fit-content;
    display: flex;
    gap: 11px;
    
    > h1{
    font-size: 2.32rem;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    font-family: "Roboto";

}
> svg {
    height: 2.7rem;
    width: 2.7rem;
}

`;