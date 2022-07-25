import * as S from "./style";
import defaultAvatar from "../../assets/icons/dark-image-profile-icon.png";
import React, { useState } from "react";
import { createService } from "../../services/profileService";
import { useNavigate } from "react-router-dom";

interface profileCreateObj {
  title: string;
  imageUrl: string;
  userId: string;
  favoritos: never[];
}

const BoxProfileCreate = (props: any) => {

  let navigate = useNavigate()

  const [values, setValues] = useState({
    title: "",
    imageUrl: "",
    userId: props.userId,
    favoritos: []
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: profileCreateObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const submitProfile = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await createService.create(values);
    console.log(response);
    
    if(response.status == 201) {
      console.log('Sucess');
      navigate('/settings/profiles')
    }
  }
  

  return (
    <S.BoxProfileCreate id="create">
      <S.BoxProfileCreateHeading>
        Criar novo perfil de usuário
      </S.BoxProfileCreateHeading>
      <S.BoxProfileCreateAvatarBox>
        <S.BoxProfileCreateAvatar src={defaultAvatar} />
      </S.BoxProfileCreateAvatarBox>
      <S.BoxProfileCreateForm onSubmit={submitProfile}>
        <S.BoxProfileCreateFormInputImg
          type="url"
          name="imageUrl"
          id="imageUrl"
          placeholder="Insira a url do avatar"
          required
          onChange={handleChangeValues}
        />
        <S.BoxProfileCreateFormInputName
          type="text"
          name="title"
          id="title"
          placeholder="Nome do Perfil"
          required
          onChange={handleChangeValues}
        />
        <S.BoxProfileCreateFormBtnSubmit type="submit">
          Criar Perfil
        </S.BoxProfileCreateFormBtnSubmit>
      </S.BoxProfileCreateForm>
    </S.BoxProfileCreate>
  );
};

export default BoxProfileCreate;
