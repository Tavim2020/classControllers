import * as Styled from './styles'

type BallProps = {
  contentBall?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Ball = ({ contentBall, onClick }: BallProps): JSX.Element => {
  return (
    <Styled.BallComponent onClick={onClick}>
      {contentBall && (
        <Styled.BallCentralized />
      )}
    </Styled.BallComponent>
  )
}
