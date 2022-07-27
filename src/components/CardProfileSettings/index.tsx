import * as S from './style';

const CardProfileSettings = ({data}: any) => {
    return (
        <S.CardProfileSettings href='#edit'>
            <img src={data.imageUrl} alt="imagem de perfil" />
            <span>{data.title}</span>
        </S.CardProfileSettings>
    );
}

export default CardProfileSettings;