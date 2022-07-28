import * as S from "./style";
import { loginService } from "../../services/authService";
import CardProfile from "../../components/CardProfile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swall from 'sweetalert'

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  let navigate = useNavigate();

  const userLogged = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      swall({
        title: 'Você não está logado, tente novamente',
        icon: 'error',
        timer: 3000
      })
      navigate("/login");
    }
    const response = await loginService.loggedUser();
    setProfiles(response.profiles);
  };  

  const getProfileId = (id: string) => {
    localStorage.setItem('profileId', id);
    navigate('/homepage');
  }
  
  useEffect(() => {
    userLogged();
  }, []);  

  return (
    <S.Profiles>
      <S.ProfileContainer>
        <S.ProfileContainerMain>
          {profiles.map((profile: any, index) => <CardProfile key={index} data={profile} clickItem={(profileId: string) =>  getProfileId(profileId)} />)}
        </S.ProfileContainerMain>
        <S.ProfileContainerButtonCreateProfile href="/settings/profiles">
          Gerenciar perfis
        </S.ProfileContainerButtonCreateProfile>
      </S.ProfileContainer>
    </S.Profiles>
  );
};

export default Profiles;
