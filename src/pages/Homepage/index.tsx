import * as S from "./style";
import GameRow from "../../components/GameRow";
import { useEffect, useState } from "react";
import { homepageService } from "../../services/homepageService";
import { useNavigate } from "react-router-dom";
import swall from 'sweetalert';

interface Game {
  coverImageUrl: string;
  id: string;
  title: string;
}

interface GameByGenrerObj { 
  name: string;
  games: Game[];

}

const Homepage = () => {
  const [gameList, setGameList] = useState<GameByGenrerObj[]>([]);
  const [profile, setProfile] = useState({
    title: '',
    imageUrl: ''
  })
  let navigate = useNavigate();

  const loadHomePage = async () => {
    const token = localStorage.getItem('jwt');

    if(!token) {
        swall({
            title: 'Você não está logado, tente novamente',
            icon: 'error',
            timer: 3000
          })
          navigate("/login");
    }

    const profileId = localStorage.getItem('profileId');
    let response = await homepageService.home(profileId);
    
    const favoritos: GameByGenrerObj = {name: 'Favoritos', games: response.favoritos.favoritos};
    const gameByGender = response.gameByGender;
    gameByGender.push(favoritos);
    setProfile(response.favoritos);
    setGameList(gameByGender)
  };

  useEffect(() => {
    loadHomePage();
  }, []);
  
  
  return (
    <S.Homepage>
      <S.HomepageContent>
        <S.HomepageContentHeader>
          <S.HomepageContentHeaderMenu />
          <img
            src={profile.imageUrl}
            alt="imagem do perfil"
            onClick={() => navigate('/profiles')}
          />
          <span>{profile.title}</span>
        </S.HomepageContentHeader>
        <S.HomepageContentMain>
          {gameList.map((game: GameByGenrerObj, index) => (
            <GameRow data={game} key={index} />
          ))}
        </S.HomepageContentMain>
      </S.HomepageContent>
    </S.Homepage>
  );
};

export default Homepage;
