import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Flex from "../../components/Box/Flex";
import HorizentalLogo from "./components/HorizentalLogo";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div`
  flex-grow: 1;
  margin-top: ${MENU_HEIGHT}px;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  margin-left: 0;
  max-width: 100%;
`;

const HorizentalMenu: React.FC<NavProps> = ({
  account,
  chainId,
  login,
  logout,  
  isDark,
  links,
  children,
}) => {
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <HorizentalLogo
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          <UserBlock account={account} login={login} logout={logout} chainId={chainId}/>
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Inner>
          {children}
        </Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default HorizentalMenu;
