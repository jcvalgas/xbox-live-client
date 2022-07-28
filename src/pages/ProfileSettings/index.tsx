import * as S from "./style";
import BoxProfileCreate from "../../components/BoxProfileCreate";
import BoxProfileEdit from "../../components/BoxProfileEdit";
import DarkLogoXbox from "../../assets/imgs/dark-logo-xbox.png";
import CardProfileSettings from "../../components/CardProfileSettings";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";
import { getProfileService } from "../../services/profileService";

const ProfileSettings = () => {
  const userId = localStorage.getItem("userId");
  const [profileSelect, setProfileSelect] = useState({
    id: '',
    title: '',
    imageUrl: ''
  })
  const [profiles, setProfiles] = useState([]);

  let navigate = useNavigate();

  const userLogged = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/login");
    }

    const response = await loginService.loggedUser();
    setProfiles(response.profiles);
  };

  const getProfileId = async (id: string) => {
    const response = await getProfileService.getByid(id);
    setProfileSelect(response)
  }
  
  useEffect(() => {
    userLogged();
  },[])
  
  return (
    <S.ProfileSettings>
      <S.ProfileSettingsContent>
        <S.BoxProfileSettings>
          <header>
            <S.BoxProfileSettingsHeader>
              Gerenciar Perfis
            </S.BoxProfileSettingsHeader>
          </header>
          <S.BoxProfileSettingsContainer>
            {profiles.map((data, index) => (
              <CardProfileSettings key={index} data={data} clickItem={(profileId: string) => getProfileId(profileId)}/>
            ))}
          </S.BoxProfileSettingsContainer>
          <S.BoxProfileSettingsBtns>
            <S.BoxProfileSettingsBtnsReturn href="/profiles">
              Voltar
            </S.BoxProfileSettingsBtnsReturn>
            <S.BoxProfileSettingsBtnsCreate href="#create">
              Criar Perfil
            </S.BoxProfileSettingsBtnsCreate>
          </S.BoxProfileSettingsBtns>
        </S.BoxProfileSettings>
      </S.ProfileSettingsContent>
      <S.Aside>
        <S.BgLogo src={DarkLogoXbox} />
        <BoxProfileCreate />
        <BoxProfileEdit data={profileSelect} />
      </S.Aside>
    </S.ProfileSettings>
  );
};

export default ProfileSettings;
