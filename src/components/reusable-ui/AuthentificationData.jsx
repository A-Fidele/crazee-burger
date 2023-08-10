import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { styled } from "styled-components";
import { theme } from "../../theme/design";

export default function AuthentificationData(props) {
  return (
    <AuthentificationDataStyled>
      <div>
        <h1>Hey, <span>{props.username}</span> </h1>
        <Link to='/' >Se déconnecter</Link>
      </div>
      <div>
        <BsPersonCircle className="circle-icon" />
      </div>
    </AuthentificationDataStyled>
  )
}

const AuthentificationDataStyled = styled.div`
    margin-right: 70px;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    h1 {
      font-family: 'Open sans', sans-serif;
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.greyB};
    }
    span {
      color:${theme.colors.primary};
      font-weight: ${theme.weights.bold};
      font-family: 'Open sans', sans-serif;
      font-size: ${theme.fonts.P0};
    }
    Link {
      cursor: pointer;
    }
    .circle-icon {
      margin-top: 15px;
      color: ${theme.colors.greyB};
      transform: scale(3.5);
    }
`;