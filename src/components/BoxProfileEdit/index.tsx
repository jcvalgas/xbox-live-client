import * as S from './style'
import defaultAvatar from '../../assets/icons/dark-image-profile-icon.png'

const BoxProfileEdit = () => {
    return (
    <S.BoxProfileEdit id="edit">
        <S.BoxProfileEditContainer>
            <S.BoxProfileEditContainerForm>
                <div>
                    <div>
                        <img src='https://i.pinimg.com/474x/b2/3c/fe/b23cfed33c691b21887843e64c27295b.jpg' alt="Imagem do avatar do perfil de usuário" />
                    </div>
                    <S.BoxProfileEditContainerFormImg placeholder='Insira a url do avatar' required/>
                </div>
                <S.BoxProfileEditContainerFormName placeholder='Nome' />
                <div>
                    <S.BoxProfileEditContainerFormBtnUpdate>Salvar alterações</S.BoxProfileEditContainerFormBtnUpdate>
                    <S.BoxProfileEditContainerFormBtnDelete>Deletar Perfil</S.BoxProfileEditContainerFormBtnDelete>
                </div>
            </S.BoxProfileEditContainerForm>
        </S.BoxProfileEditContainer>
    </S.BoxProfileEdit>
    
    );
};

export default BoxProfileEdit;