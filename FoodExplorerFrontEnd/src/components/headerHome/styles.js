import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 56px 28px 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  div {
    #titleOfHeader {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    button {
      display: none;
    }
    div {
      display: none;
    }
  }
  h1 {
    font-size: 21px;
    font-family: "Roboto";
  }
  img {
    width: 25px;
    height: 25px;
  }
  span {
    font-family: "Roboto";
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }
  #imgOnlyMobileLeft {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  #imgOnlyMobileRight {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.3rem 1.4rem 2.3rem 7.6rem;

    #imgOnlyMobileLeft {
      display: none;
    }
    #imgOnlyMobileRight {
      display: none;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 32px;
      button {
        display: block;
      }
      div {
        display: block;
      }
    }
    #titleOfHeader {
      display: flex;
      flex-shrink: 0;
      gap: 0.62rem;
      justify-content: baseline;
      width: 12.3rem;

      h1 {
        font-size: 1.5rem;
      }
    }
    #inputOfHeader {
      width: 100%;
    }
    #buttonOfHeader {
      flex-shrink: 0;
      width: 13.5rem;
    }
    #buttonSignOutOfHeader {
      width: fit-content;
      button {
        background-color: transparent;
        height: 1.37rem;
        width: 1.37rem;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
