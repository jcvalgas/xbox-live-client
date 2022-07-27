import styled, { css } from "styled-components";

export const BoxProfileEdit = styled.div`
  ${() => css`
    background-color: #212638;
    border-radius: 2rem;
    height: 70%;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    display: none;

    &:target {
      display: flex;
    }
  `}
`;

export const BoxProfileEditContainer = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.secondaryColor};
    border-radius: 2rem;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const BoxProfileEditContainerForm = styled.form`
  ${() => css`
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      div {
        width: 20rem;
        height: 20rem;
        border-radius: 100%;
        border: 3px solid rgba(134,239,134,0.8);
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    input {
      outline: none;
      text-align: center;
      transition: all 0.1s;
      text-align: center;
      color: rgba(255,255,255 , .6);
      letter-spacing: .2rem;
      font-weight: 600;
      &::placeholder {
        text-align: center;
        color: rgba(255,255,255 , .6);
        letter-spacing: .2rem;
        font-weight: 600;
      }
    }
    }
  `}
`

export const BoxProfileEditContainerFormImg = styled.input`
  ${({theme}) => css`
    width: 35%;
    height: auto;
    padding: 2rem;
    border: 3px solid #292f45;
    border-radius: 1.5rem;
    background-color: transparent;
    padding: 0.5rem 1.8rem;
    font-size: 1.5rem;
    color: ${theme.colors.baseForm};
  `}
`

export const BoxProfileEditContainerFormName = styled.input`
  ${({theme}) => css`
    width: 65%;
    height: auto;
    border: 3px solid #292f45;
    border-radius: 1.5rem;
    background-color: #293045;
    padding: 0.5rem 1.8rem;
    font-size: 1.5rem;
    color: ${theme.colors.baseForm};
  `}
`

export const BoxProfileEditContainerFormBtnUpdate = styled.button`
  ${({theme}) => css`
    height: auto;
    width: auto;
    padding: 1rem;
    background-color: transparent;
    border: 3px solid rgba(134, 239, 134, 0.4);
    border-radius: 3rem;
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      text-shadow: 1px 1px 4px ${theme.colors.colorBlack};
      background-color: rgba(134, 239, 134, 0.65);
    }
  `}
`

export const BoxProfileEditContainerFormBtnDelete = styled.button`
  ${({theme}) => css`
    height: auto;
    width: auto;
    padding: 1rem;
    background-color: transparent;
    border: 3px solid rgba(161, 48, 48, .6);
    border-radius: 3rem;
    color: #A13030;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: ${theme.colors.textColor};
      text-shadow: 1px 1px 4px ${theme.colors.colorBlack};
      background-color: rgba(161, 48, 48, .6);
    }
  `}
`