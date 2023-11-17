import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import UserContext from "../../../../../../context/UserContext";
import AdminTabs from "./AdminTabs";

export default function Admin() {
  const { isCollapsed } = useContext(UserContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
