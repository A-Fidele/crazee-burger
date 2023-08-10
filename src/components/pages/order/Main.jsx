import { styled } from "styled-components";
import { theme } from "../../../theme/design";
import Menu from "../../reusable-ui/Menu";
import { fakeMenu2 } from "../../../utils/data";

export default function Main() {
const menu = fakeMenu2.map((data) => {
  return <Menu key={data.id} image={data.imageSource} title={data.title} price={data.price} />
})


  return (
    <MainStyled>
      {menu}
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 1400px;
  height: 840px;
  box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  flex-wrap: wrap;
  align-content: flex-start;
`;