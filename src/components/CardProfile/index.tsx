import * as S from './style';

const CardProfile = ({data}: any) => {
    return (
        <S.CardProfile>
            <S.CardProfileImage src={data.imageUrl}/>
            <S.CardProfileTitle>{data.title}</S.CardProfileTitle>
        </S.CardProfile>
    );
}

export default CardProfile;