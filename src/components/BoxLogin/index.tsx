import { useState } from "react";
import { loginService } from "../../services/authService";
import GreenXboxLogo from "../../assets/icons/green-xbox-icon.png";
import * as S from "./style";

interface userLoginObj {
  email: string,
  password: string
}

const BoxLogin = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response  = await loginService.login(values);
    console.log(response);
    
    
  }
  
  return (
    <S.BoxLogin>
      <S.BoxContainer>
        <S.BoxContainerLogo src={GreenXboxLogo} alt="Logo verde xbox" />
        <S.BoxContainerHeading>Bem-vindo!</S.BoxContainerHeading>
        <S.BoxContainerForm onSubmit={loginUser}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChangeValues}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChangeValues}
          />
          <button type="submit">Login</button>
        </S.BoxContainerForm>
        <S.BoxContainerHeadingSecondary>
          Não tem uma conta? <a href="/register">Crie uma</a>
        </S.BoxContainerHeadingSecondary>
      </S.BoxContainer>
    </S.BoxLogin>
  );
};

export default BoxLogin;
