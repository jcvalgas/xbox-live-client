import * as S from './style';
import WhiteXboxLogo from '../../assets/icons/white-xbox-icon.png'
import DarkXboxLogo from '../../assets/imgs/dark-logo-xbox.png'
import LoopImageLogo from '../../assets/imgs/loop-image.png'
import JoystickLogo from '../../assets/imgs/joystick.png'
import MultiDevicesLogo from '../../assets/imgs/multi-devices.png'
import DiscordIcon from '../../assets/icons/white-discord-icon.png'
import GithubIcon from '../../assets/icons/white-github-icon.png'
import LinkedinIcon from '../../assets/icons/white-linkedin-icon.png'

export const Home = () => {
    return (
        <S.Home>
            <header>
                <S.HomeNav>
                    <S.NavLogo src={WhiteXboxLogo} />
                    <S.NavContainerLinks>
                        <S.NavLink>FAQ</S.NavLink>
                        <S.NavLink>Contact</S.NavLink>
                        <S.ButtonToLogin>Login</S.ButtonToLogin>
                    </S.NavContainerLinks>
                </S.HomeNav>
                <S.HomeContainer>
                    <S.TextBox>
                        <S.HeadingPrimary>
                            <S.HeadingPrimaryMain>Seus jogos preferidos só aqui, com a live</S.HeadingPrimaryMain>
                            <S.HeadingPrimarySub>Entre agora ou Cadastre-se</S.HeadingPrimarySub>
                        </S.HeadingPrimary>
                        <S.ButtonContainer>
                            <S.ButtonToLoginActive>Login</S.ButtonToLoginActive>
                            <S.ButtonToRegister>Register</S.ButtonToRegister>
                        </S.ButtonContainer>
                    </S.TextBox>
                    <S.LogoBox>
                        <img src={DarkXboxLogo} alt="" />
                    </S.LogoBox>
                </S.HomeContainer>
            </header>
            <main>
                <S.HomeMain>
                    <S.SectionAbout>
                        <S.TipsContainer>
                            <S.TipCard>
                                <S.TipCardLogo src={LoopImageLogo} />
                                <S.TipCardHeading>Jogue quando quiser</S.TipCardHeading>
                                <S.TipCardParagraph>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab consectetur quisquam libero eaque debitis ipsam accusamus nulla, eius id sequi reprehenderit in modi, aliquid explicabo? A ea id consectetur molestiae.
                                </S.TipCardParagraph>
                            </S.TipCard>
                            <S.TipCard>
                                <S.TipCardLogo src={JoystickLogo} />
                                <S.TipCardHeading>Crie perfis</S.TipCardHeading>
                                <S.TipCardParagraph>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab consectetur quisquam libero eaque debitis ipsam accusamus nulla, eius id sequi reprehenderit in modi, aliquid explicabo? A ea id consectetur molestiae.
                                </S.TipCardParagraph>
                            </S.TipCard>
                            <S.TipCard>
                                <S.TipCardLogo src={MultiDevicesLogo} />
                                <S.TipCardHeading>Multi-devices</S.TipCardHeading>
                                <S.TipCardParagraph>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab consectetur quisquam libero eaque debitis ipsam accusamus nulla, eius id sequi reprehenderit in modi, aliquid explicabo? A ea id consectetur molestiae.
                                </S.TipCardParagraph>
                            </S.TipCard>
                        </S.TipsContainer>
                    </S.SectionAbout>
                    <S.SectionFAQ>
                        <h1>Perguntas Frequentes</h1>
                        <S.BoxFAQ>
                            <div>
                                O que posso fazer?
                                <span>+</span>
                            </div>
                            <div>
                                O que é o projeto marketplace de jogos live?
                                <span>+</span>
                            </div>
                            <div>
                                O projeto tem fins lucrativos?
                                <span>+</span>
                            </div>
                            <div>
                                Com quem posso entrar em contato para mais informações?
                                <span>+</span>
                            </div>
                        </S.BoxFAQ>
                    </S.SectionFAQ>
                </S.HomeMain>
            </main>
            <footer>
               <S.FooterContainer>
                    <div>
                        <img src={WhiteXboxLogo} alt="" />
                    </div>
                    <S.Row>
                        <ul>
                            <li>
                                Company
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                Privacy
                            </li>
                        </ul>
                        <div>Built by <b>João Vitor C. Valgas</b> for his online course in partnership with Blue Edtech,
Copyright © by João Vitor C. Valgas. You have 100% usage permission to use this webpage for personal and commercial purposes, but NOT to claim it as your own design. A credit to the original author, J. C. Valgas, is obviously greatly appreciated!</div>
                    </S.Row>
                    <S.FooterIcons>
                        <img src={DiscordIcon} />
                        <img src={GithubIcon} />
                        <img src={LinkedinIcon} />
                    </S.FooterIcons>
               </S.FooterContainer>
            </footer>
        </S.Home>
    );
};

export default Home;