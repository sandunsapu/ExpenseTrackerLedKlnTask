import styled, {css} from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 90px;
  padding-top: 90px;
  box-shadow: 0 3px 6px 0 #555;
`;

const MenuImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const MenuContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 24px;
  margin: 8px 0;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.isSelected
        ? css`
          opacity: 1;
        `
        : css`
          opacity: 0.5;
        `}
`;
const SideMenuComp = (props) => {
    const onMenuClick = (activeMenu) => {
        props.changeTab(activeMenu)
    }
    return (
        <Container>
            <MenuContainer isSelected={props.selectedTab === "home"} onClick={() => onMenuClick("home")}>
                <MenuImage src="//public/images/wallet.png"/>
            </MenuContainer>
            <MenuContainer isSelected={props.selectedTab === "categories"} onClick={() => onMenuClick("categories")}>
                <MenuImage src="//public/images/tag.png"/>
            </MenuContainer>
            <MenuContainer isSelected={props.selectedTab === "reports"} onClick={() => onMenuClick("reports")}>
                <MenuImage src="//public/images/pie-chart.png"/>
            </MenuContainer>
        </Container>
    );
};

export default SideMenuComp;