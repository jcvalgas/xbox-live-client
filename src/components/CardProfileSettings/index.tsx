import * as S from './style';


const CardProfileSettings = ({data, clickItem}: any) => {
    return (
        <S.CardProfileSettings href='#edit' onClick={() => clickItem(data.id)}>
            <img src={data.imageUrl} alt="imagem de perfil" />
            <span>{data.title}</span>
        </S.CardProfileSettings>
    );
}

export default CardProfileSettings;