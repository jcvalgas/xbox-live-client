import * as S from "./style";
import { loginService } from "../../services/authService";
import CardProfile from "../../components/CardProfile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  let navigate = useNavigate();

  const userLogged = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/login");
      console.log("Erro, usuário não autenticado");
    }
    const response = await loginService.loggedUser();
    setProfiles(response.profiles);
  };

  useEffect(() => {
    userLogged();
  }, []);  

  return (
    <S.Profiles>
      <S.ProfileContainer>
        <S.ProfileContainerMain>
          {profiles.map((profile: any, index) => <CardProfile key={index} data={profile} />)}
        </S.ProfileContainerMain>
        <S.ProfileContainerButtonCreateProfile href="/settings/profiles">
          Gerenciar perfis
        </S.ProfileContainerButtonCreateProfile>
      </S.ProfileContainer>
    </S.Profiles>
  );
};

export default Profiles;
