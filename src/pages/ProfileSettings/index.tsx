import * as S from './style';
import BoxProfileSettings from '../../components/BoxProfileSettings';
import BoxProfileCreate from '../../components/BoxProfileCreate';
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
            </S.Aside>
        </S.ProfileSettings>
    );
}

export default ProfileSettings;