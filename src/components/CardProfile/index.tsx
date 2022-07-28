import * as S from './style';

interface cardProfileProps {
    data: any;
    clickItem: any
}

const CardProfile = ({data, clickItem}: cardProfileProps) => {
    return (
        <S.CardProfile onClick={() => clickItem(data.id)}>
            <S.CardProfileImage src={data.imageUrl}/>
            <S.CardProfileTitle>{data.title}</S.CardProfileTitle>
        </S.CardProfile>
    );
}

export default CardProfile;