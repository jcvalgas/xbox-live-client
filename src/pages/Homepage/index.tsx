import * as S from "./style";
import defaultAvatar from "../../assets/icons/dark-image-profile-icon.png";
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

    const profileId = "9b80fe99-3652-4eb8-b40a-c88a1ce0cf8f";
    let response = await homepageService.home(profileId);
    const favoritos: GameByGenrerObj = {name: 'Favoritos', games: response.favoritos.favoritos};
    const gameByGender = response.gameByGender;
    gameByGender.push(favoritos);
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
            src="https://i.pinimg.com/474x/61/f4/71/61f4719ddfeeda214b6d8da3e321ec39.jpg"
            alt="imagem do perfil"
          />
          <span>Valgas</span>
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
