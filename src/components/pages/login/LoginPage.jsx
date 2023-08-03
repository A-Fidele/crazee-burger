import Logo from '../../reusable-ui/logo';
import LoginForm from './LoginForm';
import styled from 'styled-components';

export default function LoginPage() {

  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}



const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-evenly;
  
  ::before {
    content: "";
    background: url('../../images/F03 burger-background.jpg') rgba(0,0,0,0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

`;
