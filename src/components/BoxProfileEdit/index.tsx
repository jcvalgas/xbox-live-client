import * as S from "./style";
import { useState } from "react";
import {
  profileDeleteService,
  profileUpdateService,
} from "../../services/profileService";
import swall from "sweetalert";
import { useNavigate } from "react-router-dom";

interface ProfileObj {
  title: string;
  imageUrl: string;
  favoritos: never[] 
}

const BoxProfileEdit = ({ data }: any) => {
  let navigate = useNavigate();

  const { title, imageUrl } = data;
  
  const [values, setValues] = useState({
    title: title,
    imageUrl: imageUrl,
    favoritos: [],
  });

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: ProfileObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const profileUpdate = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await profileUpdateService.update(values, data.id);
    if (response) {
      swall({
        title: "Atualização feita com sucesso",
        icon: "success",
        timer: 3000,
      });
      navigate("/profiles");
    }
  };

  const profileDelete = async () => {
    const response = await profileDeleteService.delete(data.id);
    if (!response) {
      swall({
        title: "Perfil Deletado com sucesso",
        icon: "success",
        timer: 3000,
      });
      navigate("/profiles");
    }
  };

  return (
    <S.BoxProfileEdit id="edit">
      <S.BoxProfileEditContainer>
        <S.BoxProfileEditContainerForm onSubmit={profileUpdate}>
          <div>
            <div>
              <img
                src={values.imageUrl == "" ? data.imageUrl : values.imageUrl}
                alt="Imagem do avatar do perfil de usuário"
              />
            </div>
            <S.BoxProfileEditContainerFormImg
              name="imageUrl"
              placeholder={data.imageUrl}
              onChange={handleChanges}
              required
            />
          </div>
          <S.BoxProfileEditContainerFormName
            name="title"
            placeholder={data.title}
            onChange={handleChanges}
            required
          />
          <div>
            <S.BoxProfileEditContainerFormBtnUpdate type="submit">
              Salvar alterações
            </S.BoxProfileEditContainerFormBtnUpdate>
            <S.BoxProfileEditContainerFormBtnDelete onClick={profileDelete}>
              Deletar Perfil
            </S.BoxProfileEditContainerFormBtnDelete>
          </div>
        </S.BoxProfileEditContainerForm>
      </S.BoxProfileEditContainer>
    </S.BoxProfileEdit>
  );
};

export default BoxProfileEdit;
