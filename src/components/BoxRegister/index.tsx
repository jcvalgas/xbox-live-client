import * as S from './style'
import { registerService } from '../../services/authService';
import GreenXboxLogo from '../../assets/icons/green-xbox-icon.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface userRegisterObj {
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
        cpf: number,
        isAdmin: boolean,
}

const BoxRegister = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        cpf: Number(),
        isAdmin: false,
    });

    let navigate = useNavigate();

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((values: userRegisterObj) => ({
            ...values,
            [event.target.name]: event.target.value, 
        }))
    }
    values.cpf = Number(values.cpf);
    const userRegister = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const response = await registerService.register(values)
        if(response.status == 201) {
            navigate('/login');
        }
        
    }

    return (
        <S.BoxRegister>
            <S.BoxContainer>
                <S.BoxContainerHeading>Jogue como um profissional</S.BoxContainerHeading>
                <S.BoxContainerLogo src={GreenXboxLogo}/>
                <S.BoxContainerForm onSubmit={userRegister}>
                    <input type="text" name='name' id="name" placeholder='Nome Completo' onChange={handleChanges}/>
                    <input type="number" name='cpf' id="cpf" placeholder='CPF' onChange={handleChanges}/>
                    <input type="email" name='email' id="email" placeholder='Email' onChange={handleChanges}/>
                    <input type="password" name='password' id="password" placeholder='Senha' onChange={handleChanges}/>
                    <input type="password" name='confirmPassword' id="confirmPassword" placeholder='Confirmar Senha' onChange={handleChanges}/>
                    <button type='submit'>Register</button>
                </S.BoxContainerForm>
            </S.BoxContainer>
        </S.BoxRegister>
    );
}

export default BoxRegister;