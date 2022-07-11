import * as S from "./style";
import GreenXboxLogo from "../../assets/icons/green-xbox-icon.png";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxContainer>
        <S.BoxContainerLogo src={GreenXboxLogo} alt="Logo verde xbox" />
        <S.BoxContainerHeading>Bem-vindo!</S.BoxContainerHeading>
        <S.BoxContainerForm>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
        </S.BoxContainerForm>
        <S.BoxContainerHeadingSecondary>
          Não tem uma conta? <a href="/register">Crie uma</a>{" "}
        </S.BoxContainerHeadingSecondary>
        <S.BoxContainerButtonLogin>Login</S.BoxContainerButtonLogin>
      </S.BoxContainer>
    </S.BoxLogin>
  );
};

export default BoxLogin;
