import * as S from './style';

const CardProfile = (props:any) => {
    return (
        <S.CardProfile>
            <S.CardProfileImage src={props.imageUrl}/>
            <S.CardProfileTitle>{props.title}</S.CardProfileTitle>
        </S.CardProfile>
    );
}

export default CardProfile;