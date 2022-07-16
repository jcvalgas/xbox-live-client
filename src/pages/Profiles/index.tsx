import * as S from "./style";
import configIcon from "../../assets/icons/config-icon.png";
import CardProfile from "../../components/CardProfile";

const Profiles = () => {
  return (
    <S.Profiles>
      <S.ProfileContainer>
        
      <S.ProfileContainerMain>
          <CardProfile title='Valgas 1' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZEg904HwWSC4jhONbIu7nxyTRbVs5ho0nQ&usqp=CAU' />
          <CardProfile title='Valgas 2' imageUrl='https://i.pinimg.com/custom_covers/222x/800585339949018311_1606333606.jpg' />
          <CardProfile title='Valgas 3' imageUrl='https://i.pinimg.com/550x/e6/c3/dc/e6c3dc820bd666b738a4183e78424b5a.jpg'/>
          <CardProfile title='Valgas 4' imageUrl='https://i.pinimg.com/originals/42/2c/0b/422c0b6f447e91174bc3bb51053b474f.jpg'/>
          <CardProfile title='Valgas 5' imageUrl='https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg'/>
        </S.ProfileContainerMain>
        <S.ProfileContainerButtonCreateProfile href="/edit-profile">
          Gerenciar usuários
        </S.ProfileContainerButtonCreateProfile>
      </S.ProfileContainer>

    </S.Profiles>
  );
};

export default Profiles;
