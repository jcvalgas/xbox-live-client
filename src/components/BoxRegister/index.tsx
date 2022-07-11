import * as S from './style'
import GreenXboxLogo from '../../assets/icons/green-xbox-icon.png'

const BoxRegister = () => {
    return (
        <S.BoxRegister>
            <S.BoxContainer>
                <S.BoxContainerHeading>Jogue como um profissional</S.BoxContainerHeading>
                <S.BoxContainerLogo src={GreenXboxLogo}/>
                <S.BoxContainerForm>
                    <input type="text" id="fullname" placeholder='Nome Completo'/>
                    <input type="number" id="cpf" placeholder='CPF'/>
                    <input type="email" id="email" placeholder='Email'/>
                    <input type="password" id="password" placeholder='Senha'/>
                    <input type="password" id="confirm-pass" placeholder='Confirmar Senha'/>
                    <button type='submit'>Register</button>
                </S.BoxContainerForm>
            </S.BoxContainer>
        </S.BoxRegister>
    );
}

export default BoxRegister;