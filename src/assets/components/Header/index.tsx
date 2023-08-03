import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import Logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Ignite" />

      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Historicos">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
