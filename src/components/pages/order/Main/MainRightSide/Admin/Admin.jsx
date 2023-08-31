import styled from "styled-components";
import Panel from "./Panel";
import OptionPanel from "./OptionPanel";
import { useContext } from "react";
import Usercontext from "../../../../../../context/UserContext";

export default function Admin() {
  const { isCollapsed } = useContext(Usercontext)
  return (
    <AdminStyled>
      <OptionPanel />
      {isCollapsed && <Panel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;