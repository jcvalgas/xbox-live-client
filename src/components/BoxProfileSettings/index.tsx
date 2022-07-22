import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";
import CardProfileSettings from "../../components/CardProfileSettings";
import * as S from "./style";

const BoxProfileSettings = () => {
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
    <S.BoxProfileSettings>
      <header>
        <S.BoxProfileSettingsHeader>Gerenciar Perfis</S.BoxProfileSettingsHeader>
      </header>
      <S.BoxProfileSettingsContainer>
        {profiles.map((data, index) => (
          <CardProfileSettings key={index} data={data} />
        ))}
      </S.BoxProfileSettingsContainer>
      <S.BoxProfileSettingsContainerButtonReturn href="/profiles">
        Voltar
      </S.BoxProfileSettingsContainerButtonReturn>
    </S.BoxProfileSettings>
  );
};

export default BoxProfileSettings;
