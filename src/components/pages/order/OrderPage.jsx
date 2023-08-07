import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from "../../../theme/design";
import Navbar from '../../reusable-ui/Navbar';
import Logo from '../../reusable-ui/Logo';
import Main from './Main';
import AuthentificationData from '../../reusable-ui/AuthentificationData';
import { refreshPage } from '../../../utils/window';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <div className='container'>
                <Navbar
                    logo={<Logo className={"logo-order-page"} reload={refreshPage} />}
                    user={<AuthentificationData username={username} />}
                />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    height: 100vh;
    background-color: ${theme.colors.primary};
    display:flex;
    align-items: center;
    justify-content: center;
    .container {
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;