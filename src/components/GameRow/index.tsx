import * as S from './style';

interface Game {
    coverImageUrl: string;
    id: string;
    title: string;
}

interface GameByGenrerObj {
    name: string;
    games: Game[];
}



interface gameRowProps  {
    data: GameByGenrerObj;
}

const GameRow = ({data}: gameRowProps) => {
    
    
    return (
        <S.GameRow>
            <S.GameRowTitle>{data.name}</S.GameRowTitle>
            <S.GameRowLeft></S.GameRowLeft>
            <S.GameRowRight></S.GameRowRight>
            <S.GameRowListArea>
                <S.GameRowList style={{width: data.games.length * 150}}>
                    {data.games.map((item, index) => (
                        <S.GameRowItem key={index}>
                            <S.GameRowItemImg src={item.coverImageUrl} />
                        </S.GameRowItem>
                    ))}

                </S.GameRowList>
            </S.GameRowListArea>
        </S.GameRow>
    )
}

export default GameRow;