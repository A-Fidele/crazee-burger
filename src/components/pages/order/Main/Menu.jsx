import { useContext, useState } from "react"
import styled from "styled-components"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme"
import { formatPrice } from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card"
import UserContext from "../../../../context/UserContext"

export default function Menu() {
  const { menu, setMenu } = useContext(UserContext);

  const handleDelete = (title) => {
    
    const menuUpdated = menu.filter(data => data.title !== title)
    //console.log(JSON.stringify(menuUpdated) + "menu: " + menuUpdated)
    setMenu(menuUpdated)
    return menu;
  }

  return (
    <MenuStyled className="menu">
      { menu.length < 1 ? menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            onClick={() => handleDelete(title)}
          />
        )
      }) : <span> "Rupture de stock"</span>}
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
`
