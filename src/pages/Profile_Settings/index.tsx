import * as S from './style';
import BoxProfileSettings from '../../components/BoxProfileSettings';
import DarkLogoXbox from '../../assets/imgs/dark-logo-xbox.png';

const ProfileSettings = () => {
    return (
        <S.ProfileSettings>
            <S.ProfileSettingsContent>
                <BoxProfileSettings></BoxProfileSettings>
            </S.ProfileSettingsContent>
            <S.Aside>
               <S.BgLogo src={DarkLogoXbox} />
            </S.Aside>
        </S.ProfileSettings>
    );
}

export default ProfileSettings;