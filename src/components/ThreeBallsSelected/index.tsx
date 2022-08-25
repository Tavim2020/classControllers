import { Ball } from './Ball'
import * as Styled from './styles'
import { useLocation, useNavigate } from 'react-router-dom';
import { moveToIntroductions } from './functions/moveToIntroductions';

type ThreeBallSelectedProps = {
  indexContentBall: string;
}

export const ThreeBallsSelected = ({ indexContentBall }: ThreeBallSelectedProps): JSX.Element => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const indexOne = indexContentBall === '1'
  const indexTwo = indexContentBall === '2'
  const indexThree = indexContentBall === '3'

  return (
    <Styled.BallsComponent>
      <Ball 
        contentBall={indexOne ? true : false}
        onClick={() => moveToIntroductions({ 
          pathname, 
          url: '/introduction/page/1', 
          navigate 
        })}
      />

      <Ball 
        contentBall={indexTwo ? true : false}
        onClick={() => moveToIntroductions({ 
          pathname, 
          url: '/introduction/page/2', 
          navigate 
        })}
      />

      <Ball 
        contentBall={indexThree ? true : false}
        onClick={() => moveToIntroductions({ 
          pathname, 
          url: '/introduction/page/3', 
          navigate 
        })}
      />
    </Styled.BallsComponent>
  )
}
