import { styled } from "styled-components";
import { theme } from "../../../../theme/design";
import Menu from "./Menu";
import { fakeMenu2 } from "../../../../utils/data";

export default function Main() {
const menu = fakeMenu2.map((data) => {
  return <Menu key={data.id} image={data.imageSource} title={data.title} price={data.price} />
})

return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="card" >{menu}</div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  //width: 1400px;
  //height: 840px;
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  flex-wrap: wrap;
  //align-content: center;
  overflow: scroll;
  
  .card {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  /* .basket {
    background: pink;
    height: 100%;
  } */
`;