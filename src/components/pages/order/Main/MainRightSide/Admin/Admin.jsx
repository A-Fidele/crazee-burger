import styled from "styled-components";
import Panel from "./Panel";
import { useContext } from "react";
import Usercontext from "../../../../../../context/UserContext";
import AdminTabs from "./AdminTabs";

export default function Admin() {
  const { isCollapsed } = useContext(Usercontext)
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <Panel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;