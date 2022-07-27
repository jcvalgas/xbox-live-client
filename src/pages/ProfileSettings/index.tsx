import * as S from './style';
import BoxProfileSettings from '../../components/BoxProfileSettings';
import BoxProfileCreate from '../../components/BoxProfileCreate';
import BoxProfileEdit from '../../components/BoxProfileEdit';
import DarkLogoXbox from '../../assets/imgs/dark-logo-xbox.png';

const ProfileSettings = () => {
    const userId = localStorage.getItem('userId');
    return (
        <S.ProfileSettings>
            <S.ProfileSettingsContent>
                <BoxProfileSettings />
            </S.ProfileSettingsContent>
            <S.Aside>
               <S.BgLogo src={DarkLogoXbox} />
               <BoxProfileCreate userId={userId}/>
               <BoxProfileEdit></BoxProfileEdit>
            </S.Aside>
        </S.ProfileSettings>
    );
}

export default ProfileSettings;