import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from "../../../theme/design";
import Navbar from './Navbar/Navbar';
import Logo from '../../reusable-ui/Logo';
import AuthentificationData from '../../reusable-ui/AuthentificationData';
import { refreshPage } from '../../../utils/window';
import Main from './Main/Main';

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
    width: 1512px;
    background-color: ${theme.colors.primary};
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    .container {
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;