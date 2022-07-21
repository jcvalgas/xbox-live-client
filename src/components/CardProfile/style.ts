import styled, { css } from "styled-components";

export const CardProfile = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const CardProfileImage = styled.img`
  ${() => css`
    height: auto;
    width: 15rem;
    border-radius: 100%;
    border: .2rem solid transparent;
    box-shadow: .1rem .1rem 5rem 1rem rgba(0,0,0, .5);
    cursor: pointer;
    transition: all .2s;
    &:hover {
        border: .2rem solid white;
    }
  `}
`;

export const CardProfileTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
  `}
`;
