import styled, { css } from "styled-components";

export const GameRow = styled.div`
  ${() => css`
    margin-bottom: 3rem;
  `}
`;

export const GameRowTitle = styled.h2`
  ${({theme}) => css`
    margin: 0 0 0 5rem;
    color: ${theme.colors.textColor};
  `}
`;

export const GameRowLeft = styled.div`
  ${() => css`
    position: absolute;
    width: 4rem;
    height: 22.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    left: 0;
  `}
`;

export const GameRowRight = styled.div`
  ${() => css`
    position: absolute;
    width: 4rem;
    height: 22.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    right: 0;
  `}
`;

export const GameRowListArea = styled.div`
  ${() => css`
    overflow-x: hidden;
    padding-left: 3rem;
  `}
`;

export const GameRowList = styled.div`
  ${() => css`
    transition: all 0.3s;
    overflow-x: hidden;
  `}
`;

export const GameRowItem = styled.div`
  ${() => css`
    width: 15rem;
    height: 20rem;
    cursor: pointer;
    display: inline-block;
  `}
`;

export const GameRowItemImg = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    transition: all 0.3s;

    &:hover {
      transform: scale(1);
    }
  `}
`;
