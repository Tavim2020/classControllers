import { NavigateFunction } from 'react-router-dom'

type moveToIntroductionsParams = {
  pathname: string;
  url: string;
  navigate: NavigateFunction;
}

/** 
 * Função para verificar aonde o usuário esta e 
 * mover ele para outra tela, caso ele 
 * não esteja na mesma página selecionada. 
*/ 

export const moveToIntroductions = ({ pathname, url, navigate }: moveToIntroductionsParams) => {
    if (pathname !== url) {
      navigate(url)
    }
  }