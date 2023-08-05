import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from '../../theme/design';
import Navbar from '../../reusable-ui/Navbar';
import Logo from '../../reusable-ui/Logo';
import Main from './Main';
import AuthentificationData from '../../reusable-ui/AuthentificationData';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <Navbar logo={<Logo className="logo"/>}
            user={<AuthentificationData username={username}/>}
            />            
            <Main />
        </OrderPageStyled>

    )

}

const OrderPageStyled = styled.div`
    height: 100vh;
    background-color: ${theme.colors.orange};
    display:flex;
    flex-wrap: wrap;;
    justify-content: center;
    //border: 2px solid black;
    
`;