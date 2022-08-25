import styled, { css } from 'styled-components'

export const BallComponent = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background: linear-gradient(180deg, #B447F3 -24.87%, #DF6FFD 25.8%, #EF88F3 66.04%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const BallCentralized = styled.div`
  ${({ theme }) => css`
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: ${theme.colors.white};
  `}
`