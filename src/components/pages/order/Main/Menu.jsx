import { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import { formatPrice } from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card"
import UserContext from "../../../../context/UserContext"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"

export default function Menu() {
  const { menu, isAdmin, handleDelete } = useContext(UserContext);
  const handleClick = () => {
    //menu.map(()=> alert(menu.length))
    alert(menu.length)
    //menu ? alert(menu.length) : alert("finito")
  }
  const [emptyMessage, setEmptyMessage] = useState(
    <div className="admin-empty-menu-container">
      <div className="admin-empty-menu"><span className="title">LE MENU EST VIDE ?</span></div>
      <div className="admin-empty-menu"><span>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</span></div>
      <PrimaryButton label="Générer de nouveaux produits" className="button" />
    </div>)
//  if(!isAdmin) {
//     setEmptyMessage(
//     setEmptyMessage(<div className="admin-empty-menu-container">
//        <div className="admin-empty-menu"><span className="title">VICTIME DE NOTRE SUCCES! :D</span></div>
//        <div className="admin-empty-menu"><span>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION</span></div>
//        <div className="admin-empty-menu"><span>A TRES VITE!</span></div>
//      </div>)
//     )
// }

  return (
    <MenuStyled className="menu">
      { menu.length ? menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            onClick={() => handleDelete(title)}
          />
        )
      }) : emptyMessage}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;

  .admin-empty-menu-container {
    display: flex;
    width: 1400px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 200px;
    .admin-empty-menu {
      margin-bottom: 30px;
      font-size: ${theme.fonts.size.P4};
      font-family: "Amatic SC";
      color: ${theme.colors.greySemiDark};
      font-weight: ${theme.fonts.weights.regular};
      .title {
        font-weight: ${theme.fonts.weights.bold};
      }
    }
  }
  .button {
    width: 224px;
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold}
  }
`
