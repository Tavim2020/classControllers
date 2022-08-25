import styled, { css } from 'styled-components'

export const IntroductionOneComponent = styled.section`
  ${({ theme}) => css`
    background-color: ${theme.colors.white};
    
    .wrapper {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const TitleTop = styled.h1`
  ${({ theme }) => css`
    padding: ${theme.spacing.space04};
    font-family: ${theme.font.family.caveat};
    font-size: ${theme.font.sizes.large};
    background: linear-gradient(180deg, #B447F3 26.47%, #DF6FFD 65.15%, #EF88F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${theme.spacing.space48};
  `}
`

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 8rem;
    margin-bottom: ${theme.spacing.space48};
  `}
`

export const TitleBottom = styled.h1`
  ${({ theme }) => css`
    padding: ${theme.spacing.space04};
    font-family: ${theme.font.family.caveat};
    font-size: ${theme.font.sizes.large};
    background: linear-gradient(180deg, #B447F3 26.47%, #DF6FFD 65.15%, #EF88F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`