import * as Styled from "./styles";
import Icon from '../../assets/images/class-controller-icon-center.png'
import { ThreeBallsSelected } from "../../components/ThreeBallsSelected";

export function IntroductionOne(): JSX.Element {
  return (
    <Styled.IntroductionOneComponent>
      <div className="wrapper">
        <Styled.TitleTop>Class Controllers</Styled.TitleTop>
        <Styled.Icon src={Icon} alt='Icon-Class-controllers'/>
        <Styled.TitleBottom>For Father's</Styled.TitleBottom>
      </div>

      <ThreeBallsSelected indexContentBall="1" />
    </Styled.IntroductionOneComponent>
  )
}
